import { inCity, site } from '../config/site'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80'

export function Hero() {
  return (
    <section
      id="top"
      className="relative grid min-h-[calc(100svh-4.25rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"
    >
      <div className="flex flex-col justify-end px-6 py-16 md:px-10 md:py-20 lg:px-14 lg:pb-24">
        <p className="animate-fade-up text-[0.75rem] font-semibold tracking-[0.18em] text-muted uppercase">
          Wohnungsreinigung {inCity() || 'für dein Zuhause'}
        </p>
        <h1 className="animate-fade-up delay-1 mt-4 font-serif text-[2.75rem] leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.35rem] xl:text-[4.75rem]">
          Saubere Räume.
          <br />
          Mehr Zeit für dich.
        </h1>
        <p className="animate-fade-up delay-2 mt-6 max-w-md text-[1.05rem] leading-relaxed text-muted md:text-lg">
          Professionelle Wohnungsreinigung
          {site.city ? ` in ${site.city}` : ''} – zuverlässig, gründlich und
          unkompliziert gebucht.
        </p>
        <div className="animate-fade-up delay-3 mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="/#termin"
            className="inline-flex items-center justify-center rounded-full bg-forest px-7 py-3.5 text-[0.95rem] font-semibold text-linen transition-colors hover:bg-forest-hover"
          >
            Jetzt Termin anfragen
          </a>
          <a
            href="/#preise"
            className="group inline-flex items-center gap-2 text-[0.95rem] font-medium text-ink"
          >
            Preise ansehen
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>

      <div className="relative min-h-[52vh] lg:min-h-full">
        <img
          src={HERO_IMAGE}
          alt={
            site.city
              ? `Sauberes Wohnzimmer nach einer Wohnungsreinigung in ${site.city}`
              : 'Sauberes Wohnzimmer nach einer professionellen Wohnungsreinigung'
          }
          width={1600}
          height={2000}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  )
}
