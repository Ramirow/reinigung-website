/**
 * Business details used for SEO, Impressum and JSON-LD.
 * Fill city, address, phone and email before going live.
 */
export const site = {
  name: 'Reinigung',
  tagline: 'Saubere Räume, zufriedene Kunden.',
  city: '',
  region: 'Deutschland',
  street: '',
  zip: '',
  email: '',
  phone: '',
  owner: '',
  url: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ?? '',
}

export function inCity(prefix = 'in') {
  return site.city ? `${prefix} ${site.city}` : ''
}

export function homeTitle() {
  return site.city
    ? `Wohnungsreinigung in ${site.city} | ${site.name}`
    : `Wohnungsreinigung | ${site.name}`
}

export function homeDescription() {
  const where = site.city ? ` in ${site.city}` : ''
  return `Professionelle Wohnungsreinigung${where}: Standard-, Grund-, Umzugs- und Fensterreinigung. Zuverlässig, gründlich und unkompliziert gebucht. Unverbindliches Angebot.`
}

export function siteOrigin() {
  if (site.url) return site.url
  if (typeof window !== 'undefined') return window.location.origin
  return ''
}
