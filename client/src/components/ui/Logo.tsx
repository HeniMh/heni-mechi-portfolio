export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`relative grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-ink/10 bg-raised transition duration-500 group-hover:border-accent/60 ${className}`} aria-hidden="true">
      <span className="text-[13px] font-bold tracking-[-.06em]">HM</span>
      <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-accent" />
    </span>
  );
}
