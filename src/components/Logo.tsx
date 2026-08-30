type LogoProps = {
  href?: string
}

export function Logo({ href = '#top' }: LogoProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2.5 text-ink"
      aria-label="Reinigung – zur Startseite"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 shrink-0"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" fill="#2c4638" />
        <path
          d="M9 9h14v14H9V9Zm7 0v14M9 16h14"
          fill="none"
          stroke="#f3efe8"
          strokeWidth="1.4"
        />
      </svg>
      <span className="font-serif text-[1.45rem] leading-none tracking-tight">
        Reinigung
      </span>
    </a>
  )
}
