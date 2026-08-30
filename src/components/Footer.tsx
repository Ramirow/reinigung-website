const links = [
  { href: '#impressum', label: 'Impressum' },
  { href: '#datenschutz', label: 'Datenschutz' },
  { href: '#termin', label: 'Kontakt' },
]

export function Footer() {
  return (
    <footer className="border-t border-stone bg-linen px-6 py-12 md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-sm font-serif text-xl leading-snug tracking-tight text-ink md:text-2xl">
          Reinigung – Saubere Räume, zufriedene Kunden.
        </p>
        <nav aria-label="Rechtliches" className="flex flex-wrap items-center gap-x-1 text-sm text-muted">
          {links.map((link, index) => (
            <span key={link.href} className="flex items-center gap-x-1">
              {index > 0 && <span aria-hidden="true">|</span>}
              <a
                href={link.href}
                className="px-2 py-1 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </span>
          ))}
        </nav>
      </div>
    </footer>
  )
}
