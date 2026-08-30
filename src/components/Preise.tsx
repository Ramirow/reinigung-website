const points = [
  {
    title: 'Klar kalkuliert',
    text: 'Du erhältst ein festes Angebot – ohne Nachschläge und ohne Kleingedrucktes.',
  },
  {
    title: 'Nach deinem Zuhause',
    text: 'Preis richtet sich nach Fläche, Aufwand und wie regelmäßig wir kommen.',
  },
  {
    title: 'In wenigen Schritten',
    text: 'Anfrage senden, Angebot prüfen, Termin festlegen. So einfach ist das.',
  },
]

export function Preise() {
  return (
    <section id="preise" className="border-t border-stone bg-cream px-6 py-24 md:px-10 lg:px-14">
      <div className="mx-auto max-w-5xl">
        <p className="text-[0.75rem] font-semibold tracking-[0.18em] text-muted uppercase">
          Preise
        </p>
        <h2 className="mt-4 max-w-xl font-serif text-4xl tracking-tight text-ink md:text-5xl">
          Transparent, bevor wir kommen.
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {points.map((point) => (
            <article key={point.title} className="border-t border-stone pt-6">
              <h3 className="text-lg font-semibold text-ink">{point.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{point.text}</p>
            </article>
          ))}
        </div>
        <a
          href="#termin"
          className="mt-14 inline-flex text-[0.95rem] font-medium text-ink underline decoration-stone underline-offset-4 transition-colors hover:decoration-ink"
        >
          Angebot anfragen
        </a>
      </div>
    </section>
  )
}
