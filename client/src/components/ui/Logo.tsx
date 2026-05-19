export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-950 text-white shadow-[0_18px_45px_rgba(37,99,235,.35)] ring-1 ring-white/20 ${className}`}>
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,.45),transparent_28%),radial-gradient(circle_at_80%_90%,rgba(96,165,250,.5),transparent_35%)]" />
      <span className="relative font-display text-[15px] font-black tracking-[-0.08em]">HM</span>
      <span className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,.9)]" />
    </span>
  );
}
