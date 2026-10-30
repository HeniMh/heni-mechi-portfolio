import { Khatam } from '@/components/ui/Ornaments';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`relative grid h-10 w-10 shrink-0 place-items-center text-azur transition-transform duration-700 group-hover:rotate-45 ${className}`} aria-hidden="true">
      <Khatam className="absolute inset-0 h-10 w-10" />
      <span className="font-display text-[13px] font-semibold italic tracking-tight text-ink">hm</span>
    </span>
  );
}
