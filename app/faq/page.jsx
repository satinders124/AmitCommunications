import Link from "next/link";
import PageHero from "../../components/PageHero";
import FaqAccordion from "../../components/FaqAccordion";
import Reveal from "../../components/Reveal";
import { SITE } from "../../lib/site";
import { Icon } from "../../components/Icons";

export const metadata = { title: "FAQ" };

export default function FaqPage() {
  return <><PageHero label="Common questions" currentPage="FAQ" title={<>Helpful answers,<br />without the <em>jargon.</em></>} description="A few clear answers about connection requests, plans and getting support." image="/images/faq-install.jpg"><Link href="/get-connection" className="button">Get connected <Icon name="arrowUpRight" size={18} /></Link></PageHero><section className="faq-page-section section-space"><div className="shell faq-page-layout"><Reveal className="faq-side"><p className="kicker">Before you sign up</p><h2>Ask away.<br />We&apos;re <em>listening.</em></h2><p className="section-lead">If your question is not below, message the team or call us directly.</p><div className="faq-side-actions"><a href={SITE.phonePrimaryHref} className="button button-outline"><Icon name="phone" size={17} /> Call {SITE.phonePrimary}</a><a href={SITE.whatsappUrl} target="_blank" rel="noreferrer" className="whatsapp-link"><Icon name="whatsapp" size={19} /> WhatsApp us</a></div></Reveal><Reveal delay={100}><FaqAccordion /></Reveal></div></section></>;
}
