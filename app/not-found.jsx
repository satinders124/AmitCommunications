import Link from "next/link";
import { Icon } from "../components/Icons";

export default function NotFound() {
  return <section className="not-found"><div className="shell"><p className="kicker light">A small detour</p><p className="not-found-number">404</p><h1>This page isn&apos;t<br />on the <em>network.</em></h1><p>Let&apos;s get you back to a page that is.</p><Link href="/" className="button button-dark">Back home <Icon name="arrowRight" size={18} /></Link></div></section>;
}
