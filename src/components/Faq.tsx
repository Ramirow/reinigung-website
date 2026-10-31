import { inCity, site } from '../config/site'

const faqs = [
  {
    q: `Was kostet eine Wohnungsreinigung${site.city ? ` in ${site.city}` : ''}?`,
    a: 'Der Preis hängt von Wohnungsgröße, Verschmutzung und wie regelmäßig wir kommen. Du bekommst vor dem Termin ein festes, unverbindliches Angebot – ohne Nachschläge.',
  },
  {
    q: 'Welche Leistungen sind enthalten?',
    a: 'Standardreinigung für Küche, Bad, Wohn- und Schlafräume. Zusätzlich Grundreinigung, Umzugsreinigung und Fensterreinigung – innen und außen.',
  },
  {
    q: 'Wie schnell bekomme ich ein Angebot?',
    a: 'In der Regel innerhalb von 24 Stunden nach deiner Anfrage. Schreib uns Datum und Quadratmeter, wir melden uns mit einem konkreten Vorschlag.',
  },
  {
    q: `In welchen Gebieten seid ihr unterwegs?`,
    a: site.city
      ? `Wir reinigen Wohnungen ${inCity()} und im näheren Umland. Steht deine Adresse nicht sicher fest, frag einfach über das Formular nach.`
      : 'Schreib uns deine Adresse über das Formular. Wir sagen dir schnell, ob wir in dein Gebiet kommen.',
  },
  {
    q: 'Bringt ihr Reinigungsmittel und Geräte mit?',
    a: 'Ja. Unser Team kommt mit dem nötigen Material. Besondere Mittel (z. B. allergikergeeignet) kannst du in der Anfrage vermerken.',
  },
]

export function Faq() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <section id="faq" className="bg-cream px-6 py-24 md:px-10 lg:px-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
          Häufige Fragen
        </h2>
        <dl className="mt-14 divide-y divide-stone">
          {faqs.map((item) => (
            <div key={item.q} className="py-8 first:pt-0">
              <dt className="font-serif text-2xl tracking-tight text-ink">
                {item.q}
              </dt>
              <dd className="mt-3 max-w-2xl leading-relaxed text-muted">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
