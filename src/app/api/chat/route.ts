import { SYSTEM_PROMPT } from "@/lib/knowledge";

export const runtime = "nodejs";
export const maxDuration = 30;

// IA gratuita: Groq (tier gratis, sin tarjeta) con modelo open-source GPT-OSS.
// La key vive solo en el servidor (variable de entorno GROQ_API_KEY).
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = process.env.GROQ_MODEL || "openai/gpt-oss-20b";

type Msg = { role: "user" | "assistant"; content: string };

// Límite simple por IP (best effort, en memoria de la instancia).
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 12;
}

export async function POST(req: Request) {
  const key = process.env.GROQ_API_KEY;
  if (!key) return new Response("IA no configurada", { status: 503 });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "anon";
  if (limited(ip)) return new Response("Demasiadas consultas", { status: 429 });

  let body: { messages?: Msg[] };
  try {
    body = await req.json();
  } catch {
    return new Response("Solicitud inválida", { status: 400 });
  }

  const messages = (body.messages ?? [])
    .filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim()
    )
    .slice(-8)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 500) }));

  if (!messages.length || messages[messages.length - 1].role !== "user") {
    return new Response("Solicitud inválida", { status: 400 });
  }

  const upstream = await fetch(GROQ_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      stream: true,
      temperature: 0.4,
      max_tokens: 400,
      reasoning_effort: "low",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
    }),
  }).catch(() => null);

  if (!upstream || !upstream.ok || !upstream.body) {
    return new Response("IA no disponible", { status: 502 });
  }

  // Convierte el stream SSE de Groq en texto plano que el navegador va mostrando en vivo.
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const reader = upstream.body.getReader();
  let buffer = "";

  const stream = new ReadableStream({
    async pull(controller) {
      const { done, value } = await reader.read();
      if (done) {
        controller.close();
        return;
      }
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        const l = line.trim();
        if (!l.startsWith("data:")) continue;
        const data = l.slice(5).trim();
        if (data === "[DONE]") continue;
        try {
          const delta = JSON.parse(data).choices?.[0]?.delta?.content;
          if (delta) controller.enqueue(encoder.encode(delta));
        } catch {
          /* línea parcial: se ignora */
        }
      }
    },
    cancel() {
      reader.cancel();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
