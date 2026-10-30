import { useEffect, useRef, useState } from 'react';

/** Counts the leading number of a stat ("95%", "96/100", "5+") up from zero when it scrolls into view. */
export function CountUp({ value, className = '' }: { value: string; className?: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : '';
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(match ? 0 : target);

  useEffect(() => {
    const el = ref.current;
    if (!match || !el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setCurrent(target); return; }

    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / 1400, 1);
        setCurrent(Math.round(target * (1 - Math.pow(1 - t, 3))));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    observer.observe(el);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [target]);

  if (!match) return <span className={className}>{value}</span>;
  return (
    <span ref={ref} className={className} aria-label={value}>
      <span aria-hidden="true">{current}{suffix}</span>
    </span>
  );
}
