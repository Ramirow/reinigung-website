const services = [
  {
    title: 'Standardreinigung',
    text: 'Regelmäßige Reinigung für Küche, Bad, Wohn- und Schlafräume. Ideal für den wöchentlichen oder monatlichen Rhythmus.',
  },
  {
    title: 'Grundreinigung',
    text: 'Eine gründliche Tiefenreinigung deiner gesamten Wohnung – perfekt für den Frühjahrsputz oder bei besonderem Bedarf.',
  },
  {
    title: 'Umzugsreinigung',
    text: 'Blitzsauber ein- und ausziehen. Wir übergeben deine alte oder neue Wohnung besenrein und makellos.',
  },
  {
    title: 'Fensterreinigung',
    text: 'Streifenfreie Fenster innen und außen – für klare Sicht und mehr Licht in deinen Räumen.',
  },
]

export function Leistungen() {
  return (
    <section id="leistungen" className="bg-linen px-6 py-24 md:px-10 lg:px-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
          Unsere Leistungen
        </h2>
        <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="border-t border-stone pt-6"
            >
              <p className="text-[0.75rem] font-medium tracking-[0.16em] text-muted">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 font-serif text-2xl tracking-tight text-ink md:text-[1.75rem]">
                {service.title}
              </h3>
              <p className="mt-3 max-w-sm leading-relaxed text-muted">
                {service.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
