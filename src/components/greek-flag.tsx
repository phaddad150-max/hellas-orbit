/** CSS Greek flag — blue/white stripes + canton cross. No invented claims. */
export function GreekFlag({
  className = "",
  title = "Ελληνική σημαία",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <span
      className={`greek-flag inline-block shrink-0 overflow-hidden rounded-[3px] ring-1 ring-white/25 ${className}`}
      role="img"
      aria-label={title}
      title={title}
    >
      <svg viewBox="0 0 27 18" className="h-full w-full" aria-hidden>
        <rect width="27" height="18" fill="#0D5EAF" />
        <rect y="2" width="27" height="2" fill="#fff" />
        <rect y="6" width="27" height="2" fill="#fff" />
        <rect y="10" width="27" height="2" fill="#fff" />
        <rect y="14" width="27" height="2" fill="#fff" />
        <rect width="10" height="10" fill="#0D5EAF" />
        <rect x="4" width="2" height="10" fill="#fff" />
        <rect y="4" width="10" height="2" fill="#fff" />
      </svg>
    </span>
  );
}
