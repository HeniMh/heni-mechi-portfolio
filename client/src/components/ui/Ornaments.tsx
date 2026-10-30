import { useId } from 'react';

/** Khatam — the eight-pointed star of Tunisian zellige, drawn as two interlaced squares. */
export function Khatam({ className = '', filled = false }: { className?: string; filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={filled ? 0 : 1.4} strokeLinejoin="round">
        <rect x="5" y="5" width="14" height="14" />
        <rect x="5" y="5" width="14" height="14" transform="rotate(45 12 12)" />
      </g>
    </svg>
  );
}

/** Repeating zellige lattice, meant to sit behind content at low opacity. */
export function Zellige({ className = '', size = 56 }: { className?: string; size?: number }) {
  const id = useId().replace(/:/g, '');
  const c = size / 2;
  const s = size * 0.27;
  return (
    <svg className={className} aria-hidden="true" width="100%" height="100%">
      <defs>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <rect x={c - s} y={c - s} width={s * 2} height={s * 2} />
            <rect x={c - s} y={c - s} width={s * 2} height={s * 2} transform={`rotate(45 ${c} ${c})`} />
            <path d={`M0 0 L${c - s * 1.41} ${c - s * 1.41} M${size} 0 L${c + s * 1.41} ${c - s * 1.41} M0 ${size} L${c - s * 1.41} ${c + s * 1.41} M${size} ${size} L${c + s * 1.41} ${c + s * 1.41}`} />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/* Door-nail studs that follow the arch, like the blue doors of Sidi Bou Said. */
const studs = [
  ...Array.from({ length: 19 }, (_, i) => {
    const a = Math.PI + (i * Math.PI) / 18;
    return [200 + 189 * Math.cos(a), 200 + 189 * Math.sin(a)];
  }),
  ...Array.from({ length: 13 }, (_, i) => [11, 225 + i * 24]),
  ...Array.from({ length: 13 }, (_, i) => [389, 225 + i * 24])
];

export function ArchPortrait({ src, webp, alt }: { src: string; webp?: string; alt: string }) {
  return (
    <figure className="relative mx-auto w-full max-w-[420px]">
      <div className="relative aspect-[400/520]">
        <div className="arch absolute inset-0 translate-x-4 translate-y-4 bg-clay/90" aria-hidden="true" />
        <div className="arch absolute inset-0 bg-azur" aria-hidden="true" />
        <picture>
          {webp && <source srcSet={webp} type="image/webp" />}
          <img
            src={src}
            alt={alt}
            width={1122}
            height={1402}
            fetchPriority="high"
            className="arch-inner absolute object-cover object-[50%_22%]"
            style={{ top: '4.23%', left: '5.5%', width: '89%', height: '95.77%' }}
          />
        </picture>
        <svg viewBox="0 0 400 520" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
          {studs.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="3.1" fill="rgb(var(--paper))" opacity=".9" />)}
        </svg>
        <span className="absolute left-1/2 top-0 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center bg-paper text-clay">
          <Khatam filled className="h-7 w-7 animate-spin-slow" />
        </span>
      </div>
    </figure>
  );
}
