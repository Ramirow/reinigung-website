import { useState, type FormEvent } from 'react'

const inputClass =
  'w-full border-0 border-b border-stone bg-transparent py-2.5 text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-forest'

const FORM_NAME = 'anfrage'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error' | 'local'

function encode(data: Record<string, string>) {
  return new URLSearchParams(data).toString()
}

function isLocalHost() {
  const { hostname } = window.location
  return hostname === 'localhost' || hostname === '127.0.0.1'
}

export function Termin() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const today = new Date().toISOString().slice(0, 10)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (isLocalHost()) {
      setStatus('local')
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': FORM_NAME,
          name: String(data.get('name') ?? ''),
          email: String(data.get('email') ?? ''),
          phone: String(data.get('phone') ?? ''),
          size: String(data.get('size') ?? ''),
          date: String(data.get('date') ?? ''),
          message: String(data.get('message') ?? ''),
          'bot-field': String(data.get('bot-field') ?? ''),
        }),
      })

      if (!response.ok) {
        throw new Error('submit-failed')
      }

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="termin" className="bg-linen px-6 py-24 md:px-10 lg:px-14">
      <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div>
          <h2 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
            Kontakt & Terminanfrage
          </h2>
          <p className="mt-5 max-w-sm text-[1.05rem] leading-relaxed text-muted md:text-lg">
            Schreib uns eine Nachricht oder ruf direkt an – wir melden uns
            schnellstmöglich mit einem unverbindlichen Angebot.
          </p>
        </div>

        {status === 'success' ? (
          <p className="self-center font-serif text-3xl leading-snug text-ink">
            Danke. Wir melden uns in Kürze.
          </p>
        ) : (
          <form
            name={FORM_NAME}
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="grid gap-5 sm:grid-cols-2"
          >
            <input type="hidden" name="form-name" value={FORM_NAME} />

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-ink">
                Name
              </span>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className={inputClass}
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-ink">
                E-Mail
              </span>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={inputClass}
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-ink">
                Telefon{' '}
                <span className="font-normal text-muted">(optional)</span>
              </span>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className={inputClass}
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-ink">
                Wohnungsgröße (m²)
              </span>
              <input
                id="size"
                name="size"
                type="number"
                inputMode="decimal"
                min={1}
                step={1}
                required
                className={inputClass}
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-ink">
                Gewünschtes Datum
              </span>
              <input
                id="date"
                name="date"
                type="date"
                min={today}
                required
                className={inputClass}
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-ink">
                Nachricht / Anmerkungen
              </span>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`${inputClass} resize-y`}
              />
            </label>

            <p className="hidden">
              <label>
                Nicht ausfüllen
                <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            {status === 'error' && (
              <p className="sm:col-span-2 text-sm text-red-800" role="alert">
                Die Anfrage konnte nicht gesendet werden. Bitte versuche es
                erneut.
              </p>
            )}

            {status === 'local' && (
              <p className="sm:col-span-2 text-sm text-muted" role="status">
                Lokal wird die Anfrage nicht zugestellt. Nach dem Deploy auf
                Netlify erscheint sie unter Forms.
              </p>
            )}

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-2 rounded-full bg-forest px-7 py-3.5 text-[0.95rem] font-semibold text-linen transition-colors hover:bg-forest-hover disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'submitting' ? 'Wird gesendet…' : 'Anfrage senden'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
