import { site } from '../config/site'

export function Stimmen() {
  return (
    <section id="stimmen" className="bg-cream px-6 py-24 md:px-10 lg:px-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
          Was unsere Kunden sagen
        </h2>
        <blockquote className="mt-14 max-w-3xl border-t border-stone pt-10">
          <p className="font-serif text-2xl leading-snug tracking-tight text-ink md:text-4xl md:leading-[1.2]">
            &ldquo;Zuverlässig, gründlich und immer pünktlich. Kann ich nur
            empfehlen.&rdquo;
          </p>
          <footer className="mt-8 text-[0.9rem] text-muted">
            — Kundin{site.city ? ` aus ${site.city}` : ''}
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
