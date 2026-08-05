export function Icon({ name, size = 20, stroke = 1.8, className = "", fill = "none" }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill, stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": true };
  const icons = {
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
    arrowRight: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    arrowUpRight: <><path d="M7 17 17 7" /><path d="M8 7h9v9" /></>,
    chevronDown: <path d="m6 9 6 6 6-6" />,
    chevronLeft: <path d="m15 18-6-6 6-6" />,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    minus: <path d="M5 12h14" />,
    wifi: <><path d="M5 12.5a10.2 10.2 0 0 1 14 0" /><path d="M8 16a6 6 0 0 1 8 0" /><path d="M10.8 19.2a2 2 0 0 1 2.4 0" /><circle cx="12" cy="21" r=".4" fill="currentColor" stroke="none" /></>,
    bolt: <path d="m13 2-9 12h7l-1 8 10-13h-7V2Z" />,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.78 19.78 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.78 19.78 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.64a2 2 0 0 1-.45 2.11L8 9.75a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.86.29 1.74.5 2.64.62A2 2 0 0 1 22 16.92Z" />,
    whatsapp: <><path d="M20.5 11.4a8.5 8.5 0 0 1-12.6 7.5L3.4 20.4l1.5-4.3A8.5 8.5 0 1 1 20.5 11.4Z" /><path d="M8.6 8.1c.2-.4.4-.5.8-.5h.4c.2 0 .3.1.4.4l.6 1.5c.1.2.1.4 0 .6l-.4.6c.5.9 1.2 1.7 2.1 2.2l.6-.5c.2-.2.4-.2.6-.1l1.5.7c.2.1.3.2.3.5v.4c0 .4-.2.7-.6.8-.5.1-1.1.1-1.8-.2-2.5-1-4.3-2.8-5.4-5.3-.3-.7-.4-1.3-.1-1.9Z" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" /><path d="M9 3v15M15 6v15" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    heart: <path d="M20.8 8.5c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10a4.4 4.4 0 0 1 8.8-1.1 4.4 4.4 0 0 1 8.8 1.1Z" />,
    headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="2" y="13" width="4" height="6" rx="2" /><rect x="18" y="13" width="4" height="6" rx="2" /><path d="M18 19h-2.5a1.5 1.5 0 0 1 0-3H20v1a2 2 0 0 1-2 2Z" /></>,
    router: <><rect x="3" y="9" width="18" height="8" rx="2" /><path d="M7 13h.01M10 13h.01M17 9V5M14 5h6" /></>,
    home: <><path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9Z" /><path d="M9 21v-6h6v6" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></>,
    shield: <path d="M12 3 5 6v5c0 5 3 8.5 7 10 4-1.5 7-5 7-10V6l-7-3Z" />,
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
    info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></>,
  };
  return <svg {...common}>{icons[name] || icons.wifi}</svg>;
}
