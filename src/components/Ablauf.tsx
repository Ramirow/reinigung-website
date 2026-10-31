const steps = [
  {
    title: 'Anfrage stellen',
    text: 'Sende uns dein gewünschtes Datum und deine Wohnungsgröße.',
  },
  {
    title: 'Termin bestätigen',
    text: 'Wir melden uns innerhalb von 24 Stunden mit einem Angebot.',
  },
  {
    title: 'Zurücklehnen',
    text: 'Unser Team erledigt den Rest, während du deine Zeit genießt.',
  },
]

export function Ablauf() {
  return (
    <section id="ablauf" className="bg-linen px-6 py-24 md:px-10 lg:px-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
          So einfach geht&apos;s
        </h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t border-stone pt-6">
              <p className="text-[0.75rem] font-medium tracking-[0.16em] text-muted">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 font-serif text-2xl tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
        <a
          href="/#termin"
          className="mt-14 inline-flex text-[0.95rem] font-medium text-ink underline decoration-stone underline-offset-4 transition-colors hover:decoration-ink"
        >
          Anfrage stellen
        </a>
      </div>
    </section>
  )
}
