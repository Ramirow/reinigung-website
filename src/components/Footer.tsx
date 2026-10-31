import { Link } from 'react-router-dom'
import { inCity, site } from '../config/site'

const links = [
  { to: '/impressum', label: 'Impressum' },
  { to: '/datenschutz', label: 'Datenschutz' },
  { to: '/#termin', label: 'Kontakt' },
]

export function Footer() {
  return (
    <footer className="border-t border-stone bg-linen px-6 py-12 md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="max-w-sm font-serif text-xl leading-snug tracking-tight text-ink md:text-2xl">
            {site.name} – {site.tagline}
          </p>
          <p className="mt-3 text-sm text-muted">
            Wohnungsreinigung {inCity() || 'für dein Zuhause'}.
          </p>
        </div>
        <nav aria-label="Rechtliches" className="flex flex-wrap items-center gap-x-1 text-sm text-muted">
          {links.map((link, index) => (
            <span key={link.to} className="flex items-center gap-x-1">
              {index > 0 && <span aria-hidden="true">|</span>}
              {link.to.startsWith('/#') ? (
                <a href={link.to} className="px-2 py-1 transition-colors hover:text-ink">
                  {link.label}
                </a>
              ) : (
                <Link to={link.to} className="px-2 py-1 transition-colors hover:text-ink">
                  {link.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>
    </footer>
  )
}
