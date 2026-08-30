import { Logo } from './Logo'

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-stone/80 bg-linen/90 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 md:px-10 lg:px-14">
        <Logo />
        <nav aria-label="Hauptnavigation" className="flex items-center gap-8">
          <a
            href="#leistungen"
            className="hidden text-[0.8rem] font-medium tracking-[0.14em] text-ink/70 uppercase transition-colors hover:text-ink sm:inline"
          >
            Leistungen
          </a>
          <a
            href="#ueber"
            className="hidden text-[0.8rem] font-medium tracking-[0.14em] text-ink/70 uppercase transition-colors hover:text-ink sm:inline"
          >
            Über uns
          </a>
          <a
            href="#preise"
            className="hidden text-[0.8rem] font-medium tracking-[0.14em] text-ink/70 uppercase transition-colors hover:text-ink sm:inline"
          >
            Preise
          </a>
          <a
            href="#termin"
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
