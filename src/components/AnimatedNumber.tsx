"use client";

import { memo, useEffect, useRef, useState } from "react";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export const AnimatedNumber = memo(function AnimatedNumber({
  value,
  className = "",
}: {
  value: number;
  className?: string;
}) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const finish = () => setDisplay(value);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }
    const run = () => {
      if (started.current) return;
      started.current = true;
      const DURATION = 700;
      let frame = 0;
      const t0 = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - t0) / DURATION);
        setDisplay(Math.round(value * easeOutCubic(t)));
        if (t < 1) {
          frame = requestAnimationFrame(tick);
        }
      };
      frame = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(frame);
    };
    if (typeof IntersectionObserver === "undefined") {
      run();
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <>
      <span ref={ref} aria-hidden="true" className={className}>
        {display.toLocaleString("es-CL")}
      </span>
      <span className="sr-only">{value.toLocaleString("es-CL")}</span>
    </>
  );
});
