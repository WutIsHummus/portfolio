export default function SectionLabel({ index, children, accent }) {
  return (
    <div className="reveal flex items-center gap-4 mb-10">
      <span className="mono-caps text-ink-700 dark:text-ink-300 shrink-0">
        ({String(index).padStart(2, '0')}) / {children}
      </span>
      <span className="label-rule" aria-hidden="true" />
      {accent && <span className="shrink-0 -my-2">{accent}</span>}
    </div>
  );
}
