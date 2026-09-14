export default function SectionLabel({ index, children, accent }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="mono-caps text-signal shrink-0 tabular-nums">
        {String(index).padStart(2, '0')}
      </span>
      <span className="font-display font-semibold tracking-tight text-paper text-[1.35rem] sm:text-[1.5rem]">
        {children}
      </span>
      <span className="flex-1 border-b border-dashed border-rule translate-y-[-0.35rem]" aria-hidden="true" />
      {accent && <span className="shrink-0">{accent}</span>}
    </div>
  );
}
