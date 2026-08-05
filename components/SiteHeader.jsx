"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems, SITE } from "../lib/site";
import { Icon } from "./Icons";

const isActive = (path, href) => href === "/" ? path === "/" : path.startsWith(href);

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  useEffect(() => { setOpen(false); setMoreOpen(false); }, [pathname]);
  useEffect(() => { document.body.classList.toggle("menu-open", open); return () => document.body.classList.remove("menu-open"); }, [open]);

  return <><header className={`site-header ${scrolled ? "is-scrolled" : ""}`}><div className="shell header-inner"><Link href="/" className="amit-brand" aria-label="Amit Communications home"><span className="amit-logo-mark"><img src="/images/amit-mark.jpeg" alt="" /></span><span><b>Amit</b><small>Communications</small></span></Link><nav className="desktop-nav" aria-label="Primary navigation">{navItems.slice(0, 3).map((item) => <Link href={item.href} key={item.href} className={isActive(pathname, item.href) ? "active" : ""}>{item.label}</Link>)}<div className="more-wrap" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}><button onClick={() => setMoreOpen((value) => !value)} className={pathname === "/blog" || pathname === "/contact" || pathname === "/make-a-complaint" ? "active" : ""} aria-expanded={moreOpen}>More <Icon name="chevronDown" size={15} /></button><div className={`more-menu ${moreOpen ? "open" : ""}`}><Link href="/blog"><Icon name="file" size={15} /> Helpful notes</Link><Link href="/contact"><Icon name="phone" size={15} /> Contact us</Link><Link href="/make-a-complaint"><Icon name="headset" size={15} /> Make a complaint</Link></div></div></nav><div className="header-right"><a href={SITE.phonePrimaryHref} className="header-call"><Icon name="phone" size={16} /> {SITE.phonePrimary}</a><Link href="/get-connection" className="header-cta">Get connected <Icon name="arrowUpRight" size={16} /></Link></div><button type="button" className="mobile-menu-toggle" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}><Icon name={open ? "close" : "menu"} size={23} /></button></div></header><div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}><div className="mobile-menu-panel"><p className="kicker">Amit Communications</p><nav>{navItems.map((item, index) => <Link key={item.href} href={item.href} className="mobile-nav-link" style={{ "--order": index }}><span>{item.label}</span><Icon name="arrowRight" size={19} /></Link>)}<Link href="/make-a-complaint" className="mobile-nav-link" style={{ "--order": 5 }}><span>Make a complaint</span><Icon name="arrowRight" size={19} /></Link></nav><Link href="/get-connection" className="mobile-connect">Get a new connection <Icon name="arrowUpRight" size={19} /></Link><a href={SITE.whatsappUrl} target="_blank" rel="noreferrer" className="mobile-whatsapp"><Icon name="whatsapp" size={18} /> WhatsApp us</a><p className="mobile-help">Talk to the team: {SITE.phonePrimary}</p></div></div></>;
}
