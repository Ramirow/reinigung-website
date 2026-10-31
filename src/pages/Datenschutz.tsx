import { Seo } from '../components/Seo'
import { site } from '../config/site'

export function Datenschutz() {
  return (
    <main className="px-6 py-24 md:px-10 lg:px-14">
      <Seo
        title={`Datenschutz | ${site.name}`}
        description={`Datenschutzhinweise von ${site.name} zur Verarbeitung von Anfragen.`}
        path="/datenschutz"
      />
      <article className="mx-auto max-w-2xl">
        <h1 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
          Datenschutz
        </h1>
        <div className="mt-10 space-y-6 leading-relaxed text-muted">
          <p>
            Verantwortliche Stelle: {site.name}
            {site.city ? `, ${site.city}` : ''}. Kontakt über das
            Formular auf dieser Website
            {site.email ? ` oder per E-Mail an ${site.email}` : ''}.
          </p>
          <p>
            Über das Kontaktformular übermittelte Angaben (Name, E-Mail, Telefon,
            Wohnungsgröße, Wunschtermin, Nachricht) dienen ausschließlich der
            Bearbeitung deiner Anfrage und der Angebotserstellung. Rechtsgrundlage
            ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).
          </p>
          <p>
            Die Übermittlung erfolgt über Netlify Forms (Netlify, Inc.). Die Daten
            werden dort gespeichert und können per E-Mail an uns weitergeleitet
            werden. Sie werden gelöscht, sobald die Anfrage abgeschlossen ist und
            keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>
          <p>
            Diese Website lädt Schriftarten von Google Fonts und ein Vorschaubild
            von Unsplash. Dabei kann die jeweilige Anbieterin deine IP-Adresse
            verarbeiten.
          </p>
          <p>
            Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
            der Verarbeitung und Beschwerde bei einer Datenschutzaufsichtsbehörde.
          </p>
        </div>
      </article>
    </main>
  )
}
