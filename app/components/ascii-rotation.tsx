"use client";

import { useEffect, useState } from "react";

// Idle: cat waves a paw, occasional blink. Each frame is padded to the same
// width so the container never resizes between frames.
const IDLE_FRAMES = [
  "   /\\_/\\   \n  ( o.o )  \n   > ^ <   ",
  "   /\\_/\\   \n  ( o.o )  \n   > ^ <   ",
  "   /\\_/\\   \n  ( -.- )  \n   > ^ <   ",
  "   /\\_/\\   \n  ( o.o )  \n   > ^ <   ",
  "   /\\_/\\   \n  ( o.O )  \n   > ^ <   ",
  "   /\\_/\\   \n  ( o.O )  \n   > ^ <   ",
  "   /\\_/\\   \n  ( o.o )  \n   > ^ <   ",
  "   /\\_/\\   \n  ( O.o )  \n   > ^ <   ",
  "   /\\_/\\   \n  ( O.o )  \n   > ^ <   ",
  "   /\\_/\\   \n  ( o.o )  \n   > ^ <   ",
  "   /\\_/\\   \n  ( ^.^ )  \n   > w <   ",
  "   /\\_/\\   \n  ( ^.^ )  \n   > w <   ",
  "   /\\_/\\   \n  ( o.o )  \n   > ^ <   ",
  "   /\\_/\\   \n  ( -.- )  \n   > ^ <   ",
] as const;

// Sleep: eyes closed, paw down, tail flicks lazily.
const SLEEP_FRAMES = [
  "   /\\_/\\   \n  ( -.- )  \n   > ^ < ~~",
  "   /\\_/\\   \n  ( -.- )  \n   > ^ < ~ ",
  "   /\\_/\\   \n  ( -.- )  \n   > ^ < _~",
  "   /\\_/\\   \n  ( -.- )  \n   > ^ < ~ ",
] as const;

const IDLE_MS = 600;
const SLEEP_MS = 380;

export function AsciiRotation() {
  const [frame, setFrame] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPaused(mq.matches);
    const onChange = () => setPaused(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(
      () => setFrame((f) => f + 1),
      hovered ? SLEEP_MS : IDLE_MS,
    );
    return () => window.clearInterval(id);
  }, [paused, hovered]);

  const frames = hovered ? SLEEP_FRAMES : IDLE_FRAMES;
  const current = frames[frame % frames.length];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-fit -ml-3 mb-3 cursor-default"
    >
      {hovered && (
        <>
          <span
            aria-hidden
            className="animate-float-z pointer-events-none absolute -top-3 left-[58px] text-[10px] leading-none text-stone-400 select-none"
          >
            z
          </span>
          <span
            aria-hidden
            style={{ animationDelay: "1.2s" }}
            className="animate-float-z pointer-events-none absolute -top-3 left-[58px] text-[11px] leading-none text-stone-400 select-none"
          >
            Z
          </span>
        </>
      )}
      <pre
        aria-hidden
        className="text-[11px] leading-[1.15] text-stone-400 tabular-nums select-none"
      >
        {current}
      </pre>
    </div>
  );
}
