import { site } from '../config/site'

const FORM_NAME = 'anfrage'

export type AnfrageFields = {
  name: string
  email: string
  phone: string
  size: string
  date: string
  message: string
}

export async function emailAnfrage(fields: AnfrageFields) {
  const inbox = site.email.trim()
  if (!inbox) {
    throw new Error('missing-inbox')
  }

  const response = await fetch(`https://formsubmit.co/ajax/${inbox}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: fields.name,
      email: fields.email,
      _replyto: fields.email,
      telefon: fields.phone || '–',
      'wohnungsgröße_m2': fields.size,
      wunschdatum: fields.date,
      nachricht: fields.message || '–',
      _subject: `Neue Terminanfrage – ${fields.name}`,
      _template: 'table',
      _captcha: 'false',
    }),
  })

  const payload = (await response.json().catch(() => null)) as
    | { success?: string | boolean; message?: string }
    | null

  const ok =
    response.ok &&
    (payload?.success === true ||
      payload?.success === 'true' ||
      payload?.success === 'True')

  if (!ok) {
    throw new Error(payload?.message || 'email-failed')
  }
}

export function postToNetlify(fields: AnfrageFields, botField: string) {
  const params = new URLSearchParams()
  params.set('form-name', FORM_NAME)
  params.set('name', fields.name)
  params.set('email', fields.email)
  params.set('phone', fields.phone)
  params.set('size', fields.size)
  params.set('date', fields.date)
  params.set('message', fields.message)
  params.set('bot-field', botField)

  return fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  })
}
