"use client";
import { useEffect, useState } from "react";

export function CursorFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
      className="
        pointer-events-none 
        fixed 
        top-0 
        left-0 
        w-3 
        h-3 
        rounded-full 
        bg-emerald-500
        z-[9999]
        transition-transform
        duration-75
      "
    />
  );
}