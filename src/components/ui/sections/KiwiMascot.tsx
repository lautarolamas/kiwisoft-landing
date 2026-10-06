"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";

export type KiwiMood = "idle" | "thinking" | "talking";

interface Props {
  size?: number | string;
  mood?: KiwiMood;
  /** Flota, parpadea, sigue el cursor y salta al tocarlo. */
  alive?: boolean;
  onPoke?: () => void;
  className?: string;
}

const SEEDS = Array.from({ length: 16 }, (_, i) => {
  const a = (i / 16) * Math.PI * 2;
  return {
    x: +(100 + Math.cos(a) * 47).toFixed(2),
    y: +(104 + Math.sin(a) * 47).toFixed(2),
    r: +((a * 180) / Math.PI + 90).toFixed(1),
  };
});

export default function KiwiMascot({
  size = 200,
  mood = "idle",
  alive = true,
  onPoke,
  className,
}: Props) {
  const reduce = useReducedMotion();
  const animated = alive && !reduce;
  const uid = useId().replace(/:/g, "");
  const ref = useRef<SVGSVGElement>(null);
  const jump = useAnimationControls();
  const [look, setLook] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);

  // Los ojos siguen el cursor
  useEffect(() => {
    if (!animated) return;
    const onMove = (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const d = Math.hypot(dx, dy) || 1;
      const k = Math.min(1, d / 250);
      setLook({ x: (dx / d) * 5 * k, y: (dy / d) * 4 * k });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [animated]);

  // Parpadeo a intervalos al azar
  useEffect(() => {
    if (!animated) return;
    let t: ReturnType<typeof setTimeout>;
    const loop = () => {
      t = setTimeout(() => {
        setBlink(true);
        setTimeout(() => setBlink(false), 130);
        loop();
      }, 1800 + Math.random() * 3200);
    };
    loop();
    return () => clearTimeout(t);
  }, [animated]);

  const poke = () => {
    if (animated) {
      jump.start({
        y: [0, -26, 0, -8, 0],
        scaleY: [1, 1.06, 0.92, 1.02, 1],
        scaleX: [1, 0.96, 1.06, 0.99, 1],
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
    onPoke?.();
  };

  const eye = mood === "thinking" ? { x: look.x * 0.3, y: -4 } : look;
  const talking = mood === "talking";

  return (
    <motion.div
      className={className}
      style={{ width: size, height: size, display: "inline-block" }}
      animate={animated ? { y: [0, -8, 0] } : undefined}
      transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.svg
        ref={ref}
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
        role="img"
        aria-label="Kiwi, la mascota de Kiwisoft"
        animate={jump}
        onClick={poke}
        style={{ cursor: onPoke || animated ? "pointer" : "default", overflow: "visible" }}
      >
        <defs>
          <radialGradient id={`flesh-${uid}`} cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#89d1b7" />
            <stop offset="70%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#10b981" />
          </radialGradient>
        </defs>

        {/* sombra */}
        <ellipse cx="100" cy="196" rx="52" ry="5" fill="#000" opacity="0.28" />

        {/* hojita */}
        <motion.g
          style={{ transformOrigin: "100px 20px" }}
          animate={animated ? { rotate: [-6, 8, -6] } : undefined}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M100 20 C 100 2, 124 -2, 136 8 C 128 24, 112 28, 100 20 Z" fill="#10b981" />
          <path d="M100 20 C 112 14, 122 11, 132 9" stroke="#065f46" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </motion.g>

        {/* cáscara y pulpa */}
        <circle cx="100" cy="104" r="88" fill="#065f46" />
        <circle cx="100" cy="104" r="82" fill="#047857" />
        <circle cx="100" cy="104" r="76" fill={`url(#flesh-${uid})`} />

        {/* corazón blanco */}
        <ellipse cx="100" cy="106" rx="34" ry="29" fill="#ecfdf5" />

        {/* semillas (giran cuando piensa) */}
        <motion.g
          style={{ transformOrigin: "100px 104px" }}
          animate={mood === "thinking" && !reduce ? { rotate: 360 } : { rotate: 0 }}
          transition={
            mood === "thinking"
              ? { duration: 2.2, repeat: Infinity, ease: "linear" }
              : { duration: 0.4 }
          }
        >
          {SEEDS.map((s, i) => (
            <ellipse key={i} cx={s.x} cy={s.y} rx="2.3" ry="4.4" fill="#064e3b" transform={`rotate(${s.r} ${s.x} ${s.y})`} />
          ))}
        </motion.g>

        {/* cachetes */}
        <ellipse cx="62" cy="116" rx="9" ry="5.5" fill="#fda4af" opacity="0.55" />
        <ellipse cx="138" cy="116" rx="9" ry="5.5" fill="#fda4af" opacity="0.55" />

        {/* ojos */}
        {[78, 122].map((cx) => (
          <g key={cx}>
            <ellipse cx={cx} cy="94" rx="12" ry="13" fill="#fff" />
            <g style={{ transform: `translate(${eye.x}px, ${eye.y}px)`, transition: "transform 0.12s ease-out" }}>
              <circle cx={cx} cy="94" r="7" fill="#052e22" />
              <circle cx={cx + 2.5} cy="91" r="2.4" fill="#fff" />
            </g>
            <ellipse
              cx={cx}
              cy="94"
              rx="12.5"
              ry="13.5"
              fill="#34d399"
              style={{
                transformBox: "fill-box",
                transformOrigin: "50% 0%",
                transform: `scaleY(${blink ? 1 : 0})`,
                transition: "transform 0.07s linear",
              }}
            />
          </g>
        ))}

        {/* boca */}
        {talking ? (
          <motion.ellipse
            cx="100"
            cy="122"
            rx="8"
            ry="6"
            fill="#052e22"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
            animate={{ scaleY: [0.35, 1, 0.5, 0.9, 0.4], scaleX: [1, 0.85, 1, 0.9, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        ) : mood === "thinking" ? (
          <ellipse cx="100" cy="123" rx="4" ry="3.4" fill="#052e22" />
        ) : (
          <path d="M88 118 Q100 132 112 118" stroke="#052e22" strokeWidth="3.4" fill="none" strokeLinecap="round" />
        )}
      </motion.svg>
    </motion.div>
  );
}
