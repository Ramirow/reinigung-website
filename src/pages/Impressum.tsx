import { Seo } from '../components/Seo'
import { site } from '../config/site'

export function Impressum() {
  return (
    <main className="px-6 py-24 md:px-10 lg:px-14">
      <Seo
        title={`Impressum | ${site.name}`}
        description={`Impressum und gesetzliche Angaben von ${site.name}.`}
        path="/impressum"
      />
      <article className="mx-auto max-w-2xl">
        <h1 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
          Impressum
        </h1>
        <div className="mt-10 space-y-6 leading-relaxed text-muted">
          <p>Angaben gemäß § 5 TMG.</p>
          <p>
            {site.name}
            <br />
            {site.street || '[Straße, Nr.]'}
            <br />
            {site.zip || '[PLZ]'} {site.city || '[Ort]'}
          </p>
          <p>
            E-Mail: {site.email || '[E-Mail]'}
            <br />
            Telefon: {site.phone || '[Telefon]'}
          </p>
          <p>
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:{' '}
            {site.owner || '[Name]'}
          </p>
        </div>
      </article>
    </main>
  )
}
