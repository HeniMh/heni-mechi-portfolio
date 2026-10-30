export function Logo({ className = '' }: { className?: string }) {
  return (
    <span
      className={`grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl border border-black/10 bg-[#05070b] shadow-sm transition-transform duration-300 group-hover:-rotate-3 dark:border-white/10 ${className}`}
      aria-hidden="true"
    >
      <span className="text-[12px] font-extrabold tracking-[-0.045em] text-[#d9ff63]">HM</span>
    </span>
  );
}
