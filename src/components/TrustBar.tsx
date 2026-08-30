const signals = [
  'Versichertes Team',
  'Flexible Termine',
  'Faire Preise',
  'Zufriedenheitsgarantie',
]

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-forest"
    >
      <path
        d="M3.2 8.3 6.1 11.2 12.8 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function TrustBar() {
  return (
    <section
      aria-label="Vertrauen"
      className="border-y border-stone bg-cream"
    >
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-4 px-6 py-6 sm:py-7 md:grid-cols-4 md:px-10 lg:px-14">
        {signals.map((signal) => (
          <li
            key={signal}
            className="flex items-start gap-2.5 text-[0.85rem] font-medium tracking-wide text-ink sm:text-[0.9rem]"
          >
            <CheckIcon />
            {signal}
          </li>
        ))}
      </ul>
    </section>
  )
}
