import { site, siteOrigin } from '../config/site'

export function JsonLd() {
  const origin = siteOrigin()
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'HouseCleaner',
    name: site.name,
    description:
      'Professionelle Wohnungsreinigung: Standard-, Grund-, Umzugs- und Fensterreinigung.',
    url: origin || undefined,
    areaServed: site.city
      ? { '@type': 'City', name: site.city }
      : { '@type': 'Country', name: 'Deutschland' },
    priceRange: '€€',
    availableLanguage: 'German',
  }

  if (site.phone) data.telephone = site.phone
  if (site.email) data.email = site.email
  if (site.street && site.zip && site.city) {
    data.address = {
      '@type': 'PostalAddress',
      streetAddress: site.street,
      postalCode: site.zip,
      addressLocality: site.city,
      addressCountry: 'DE',
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
