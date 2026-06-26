type IconName =
  | "heart"
  | "home"
  | "box"
  | "hands"
  | "toothbrush"
  | "sock"
  | "water"
  | "snack"
  | "blanket"
  | "firstaid"
  | "people"
  | "mail"
  | "phone"
  | "pin"
  | "arrow"
  | "check"
  | "store"
  | "calendar"
  | "menu"
  | "close";

const paths: Record<IconName, React.ReactNode> = {
  heart: (
    <path d="M12 20.2s-7.6-4.6-9.8-9.3C.8 7.6 2.4 4.4 5.6 3.6c2.1-.5 4 .4 5.4 2.3 1.4-1.9 3.3-2.8 5.4-2.3 3.2.8 4.8 4 3.4 7.3-2.2 4.7-9.8 9.3-9.8 9.3Z" />
  ),
  home: (
    <>
      <path d="M3.5 11 12 4l8.5 7" />
      <path d="M5.5 9.5V19a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9.5" />
      <path d="M9.5 20v-5.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V20" />
    </>
  ),
  box: (
    <>
      <path d="M3.5 8.2 12 4l8.5 4.2L12 12.4 3.5 8.2Z" />
      <path d="M3.5 8.2V16l8.5 4.2 8.5-4.2V8.2" />
      <path d="M12 12.4V20.2" />
    </>
  ),
  hands: (
    <>
      <path d="M7 13.5 3.7 11a1.3 1.3 0 0 1 1.6-2l3.4 1.8" />
      <path d="M17 13.5 20.3 11a1.3 1.3 0 0 0-1.6-2l-3.4 1.8" />
      <path d="M7 13.5V18a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4.5" />
      <path d="M9.5 12.5h5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 0 1 0-3Z" />
    </>
  ),
  toothbrush: (
    <>
      <path d="M4 20 15 9" />
      <path d="M13 7l4-4 3 3-4 4Z" />
      <path d="M6.5 17.5 4 20l2.5-2.5" />
      <path d="M9 15l2 2" />
      <path d="M11 13l2 2" />
    </>
  ),
  sock: (
    <path d="M9 3h5v8.5l4.3 5.7a2 2 0 0 1-1.6 3.2H8.6A2.6 2.6 0 0 1 6 17.8V7a4 4 0 0 1 3-4Z" />
  ),
  water: (
    <path d="M12 3.5s6 6.4 6 10.8a6 6 0 1 1-12 0c0-4.4 6-10.8 6-10.8Z" />
  ),
  snack: (
    <>
      <path d="M6 9 12 4l6 5-1.3 9.3a2 2 0 0 1-2 1.7H9.3a2 2 0 0 1-2-1.7L6 9Z" />
      <path d="M9 9h6" />
    </>
  ),
  blanket: (
    <>
      <path d="M3.5 5h17v9.5a4.5 4.5 0 0 1-4.5 4.5h-8A4.5 4.5 0 0 1 3.5 14.5V5Z" />
      <path d="M3.5 9.5h17" />
      <path d="M8 5v4.5" />
      <path d="M16 5v4.5" />
    </>
  ),
  firstaid: (
    <>
      <rect x="3.5" y="6.5" width="17" height="13" rx="2.2" />
      <path d="M8 6.5V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5" />
      <path d="M12 10.5v5" />
      <path d="M9.5 13h5" />
    </>
  ),
  people: (
    <>
      <circle cx="8.5" cy="8" r="2.6" />
      <circle cx="16" cy="9" r="2.1" />
      <path d="M3 19v-1.2A4.3 4.3 0 0 1 7.3 13.5h2.4A4.3 4.3 0 0 1 14 17.8V19" />
      <path d="M15 13.8a3.6 3.6 0 0 1 5.5 3.1V19" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4.5 7 12 13l7.5-6" />
    </>
  ),
  phone: (
    <path d="M8 3.5 6 5.3a2 2 0 0 0-.4 2.3c1 2.2 2.5 4.3 4.4 6.2 1.9 1.9 4 3.4 6.2 4.4a2 2 0 0 0 2.3-.4l1.8-2-3.6-3-1.3 1a10.6 10.6 0 0 1-4.4-4.4l1-1.3-3-3.6Z" />
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.8-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.2-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  arrow: <path d="M4 12h15.5M13 5.5 19.5 12 13 18.5" />,
  check: <path d="M4.5 12.5 9 17l10.5-11" />,
  store: (
    <>
      <path d="M4 9.5 5.3 4h13.4l1.3 5.5" />
      <path d="M4 9.5a2.3 2.3 0 0 0 4.5.6 2.3 2.3 0 0 0 4.5 0 2.3 2.3 0 0 0 4.5 0 2.3 2.3 0 0 0 4.5-.6" />
      <path d="M5.5 11v8.5h13V11" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6.5h16" />
      <path d="M4 12h16" />
      <path d="M4 17.5h16" />
    </>
  ),
  close: (
    <>
      <path d="M5.5 5.5l13 13" />
      <path d="M18.5 5.5l-13 13" />
    </>
  ),
};

export function Icon({
  name,
  size = 24,
  strokeWidth = 1.6,
  className,
}: {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
