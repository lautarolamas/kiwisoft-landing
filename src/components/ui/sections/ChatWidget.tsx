"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconSend2, IconX } from "@tabler/icons-react";
import KiwiMascot, { KiwiMood } from "./KiwiMascot";
import { GREETING, SUGGESTIONS, localAnswer } from "@/lib/knowledge";

type Msg = { role: "user" | "assistant"; content: string };

export const ASK_EVENT = "kiwi:ask";

/** Pide a Kiwi una pregunta desde cualquier parte de la página. */
export function askKiwi(text: string) {
  window.dispatchEvent(new CustomEvent(ASK_EVENT, { detail: text }));
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: GREETING },
  ]);
  const [input, setInput] = useState("");
  const [mood, setMood] = useState<KiwiMood>("idle");
  const busy = useRef(false);
  const history = useRef<Msg[]>([]);
  const endRef = useRef<HTMLDivElement>(null);

  history.current = messages;

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, open]);

  const send = useCallback(async (raw: string) => {
    const text = raw.trim().slice(0, 300);
    if (!text || busy.current) return;
    busy.current = true;

    const next: Msg[] = [...history.current, { role: "user", content: text }];
    setMessages([...next, { role: "assistant", content: "" }]);
    setMood("thinking");

    const setLast = (content: string) =>
      setMessages((m) => [...m.slice(0, -1), { role: "assistant", content }]);

    let answer = "";
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.ok || !res.body) throw new Error("api");
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        answer += dec.decode(value, { stream: true });
        setMood("talking");
        setLast(answer);
      }
      if (!answer.trim()) throw new Error("empty");
    } catch {
      // Sin IA (sin key, sin cupo o sin red): respuestas locales
      answer = localAnswer(text);
      setMood("talking");
      for (let i = 1; i <= answer.length; i += 3) {
        setLast(answer.slice(0, i));
        await new Promise((r) => setTimeout(r, 14));
      }
      setLast(answer);
    }

    setTimeout(() => setMood("idle"), 500);
    busy.current = false;
  }, []);

  // Preguntas disparadas desde la sección "Preguntale a Kiwi"
  useEffect(() => {
    const onAsk = (e: Event) => {
      setOpen(true);
      send((e as CustomEvent<string>).detail);
    };
    window.addEventListener(ASK_EVENT, onAsk);
    return () => window.removeEventListener(ASK_EVENT, onAsk);
  }, [send]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    send(input);
    setInput("");
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Chat con Kiwi"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="fixed z-[70] inset-x-0 bottom-0 h-[82dvh] sm:inset-x-auto sm:right-6 sm:bottom-24 sm:h-[560px] sm:w-[390px] flex flex-col overflow-hidden rounded-t-3xl sm:rounded-3xl border border-white/10 bg-[#202221]/95 backdrop-blur-xl shadow-2xl shadow-black/60 pb-[env(safe-area-inset-bottom)]"
          >
            <header className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-gradient-to-r from-emerald-500/15 to-transparent">
              <KiwiMascot size={44} mood={mood} />
              <div className="flex-1 leading-tight">
                <p className="font-semibold text-white">Kiwi</p>
                <p className="text-xs text-emerald-300/80">
                  {mood === "thinking" ? "Pensando…" : "Asistente de Kiwisoft"}
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar chat"
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition"
              >
                <IconX size={20} />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <p
                    className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-emerald-500 text-white rounded-br-md"
                        : "bg-white/[0.07] text-gray-100 rounded-bl-md"
                    }`}
                  >
                    {m.content || (
                      <span className="inline-flex gap-1 py-1" aria-label="Escribiendo">
                        {[0, 1, 2].map((d) => (
                          <span
                            key={d}
                            className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-bounce"
                            style={{ animationDelay: `${d * 0.15}s` }}
                          />
                        ))}
                      </span>
                    )}
                  </p>
                </div>
              ))}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-200 hover:bg-emerald-500/20 transition"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
              <div ref={endRef} />
            </div>

            <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-white/10 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={300}
                placeholder="Preguntale algo a Kiwi…"
                aria-label="Tu pregunta"
                className="flex-1 rounded-full bg-white/[0.07] px-4 py-2.5 text-base sm:text-sm text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-emerald-500/60"
              />
              <button
                type="submit"
                aria-label="Enviar"
                disabled={!input.trim()}
                className="grid h-10 w-10 place-items-center rounded-full bg-emerald-500 text-white transition hover:bg-emerald-400 disabled:opacity-40"
              >
                <IconSend2 size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Cerrar chat con Kiwi" : "Abrir chat con Kiwi"}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className={`fixed z-[60] right-4 bottom-4 sm:right-6 sm:bottom-6 grid h-16 w-16 place-items-center rounded-full bg-[#202221] border border-emerald-500/40 shadow-lg shadow-emerald-500/20 ${
          open ? "max-sm:hidden" : ""
        }`}
        style={{ marginBottom: "env(safe-area-inset-bottom)" }}
      >
        <KiwiMascot size={46} mood={mood} />
        {!open && (
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-emerald-400 ring-2 ring-[#1C1C1C] animate-pulse" />
        )}
      </motion.button>
    </>
  );
}
