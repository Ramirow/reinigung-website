import { Logo } from './Logo'

const nav = [
  { href: '/#leistungen', label: 'Leistungen' },
  { href: '/#ueber', label: 'Über uns' },
  { href: '/#preise', label: 'Preise' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-stone/80 bg-linen/90 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 md:px-10 lg:px-14">
        <Logo href="/" />
        <nav aria-label="Hauptnavigation" className="flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden text-[0.8rem] font-medium tracking-[0.14em] text-ink/70 uppercase transition-colors hover:text-ink sm:inline"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#termin"
            className="rounded-full bg-forest px-4 py-2 text-[0.8rem] font-semibold tracking-wide text-linen transition-colors hover:bg-forest-hover"
          >
            <span className="sm:hidden">Termin</span>
            <span className="hidden sm:inline">Jetzt Termin anfragen</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
