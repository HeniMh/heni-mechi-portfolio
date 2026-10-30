type Props = {
  index: string;
  label: string;
  title: string;
  lead?: string;
  /** Use on sections that are always dark (e.g. the career timeline). */
  onDark?: boolean;
};

export function SectionHeader({ index, label, title, lead, onDark = false }: Props) {
  return (
    <div data-reveal className="mx-auto max-w-3xl text-center">
      <span className={`section-kicker ${onDark ? '!border-white/10 !bg-white/5 !text-white/70' : ''}`}>
        <span className="text-[#89b927] dark:text-[#d9ff63]">{index}</span>
        <span className="h-3 w-px bg-current opacity-30" />
        {label}
      </span>
      <h2 className={`section-title mx-auto mt-5 ${onDark ? '!text-white' : ''}`}>{title}</h2>
      {lead && <p className={`mx-auto mt-5 max-w-2xl text-base leading-7 ${onDark ? 'text-white/70' : 'text-black/70 dark:text-white/70'}`}>{lead}</p>}
    </div>
  );
}
