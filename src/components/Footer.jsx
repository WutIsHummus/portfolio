export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-300 dark:border-ink-700 pt-8 mono-caps text-ink-700 dark:text-ink-300 flex flex-col sm:flex-row gap-2 sm:justify-between">
      <span>© {year} Alperen Aydin</span>
      <span>Designed with care · Austin, TX</span>
    </footer>
  );
}
