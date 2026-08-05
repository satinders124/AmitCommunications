import Link from "next/link";
import PageHero from "../../components/PageHero";
import PlanCard from "../../components/PlanCard";
import Reveal from "../../components/Reveal";
import { plans, SITE } from "../../lib/site";
import { Icon } from "../../components/Icons";

export const metadata = { title: "Plans" };

export default function PlansPage() {
  return <><PageHero label="Amit Communications plans" currentPage="Plans" title={<>More choice.<br /><em>More connection.</em></>} description="Explore the current listed fiber plans, from everyday speeds to the fastest option for demanding online homes." image="/images/wifi-router.jpg"><Link href="/get-connection" className="button">Choose your plan <Icon name="arrowUpRight" size={18} /></Link></PageHero><section className="plans-intro section-space-small"><div className="shell plans-intro-grid"><Reveal><p className="kicker">Our plans</p><h2>Simple numbers.<br /><em>Solid connection.</em></h2></Reveal><Reveal delay={90}><p className="section-lead">Each plan is designed around a clear speed and listed data allowance. Pick your fit and send the team a request to confirm it for your address.</p><p className="inline-note"><Icon name="info" size={16} /> Prices and data limits are shown as listed by Amit Communications.</p></Reveal></div></section><section className="plans-full-section section-space-small"><div className="shell plans-grid">{plans.map((plan, index) => <Reveal key={plan.price} delay={(index % 3) * 80}><PlanCard plan={plan} index={index} /></Reveal>)}</div></section><section className="plans-callout"><div className="shell plans-callout-inner"><Reveal><p className="kicker light">Need a little direction?</p><h2>We&apos;ll help you find<br />the right <em>match.</em></h2></Reveal><Reveal className="plans-callout-actions" delay={100}><a href={SITE.whatsappUrl} target="_blank" rel="noreferrer" className="button button-dark"><Icon name="whatsapp" size={18} /> Ask on WhatsApp</a><Link href="/get-connection" className="text-link dark">Get connection <Icon name="arrowRight" size={18} /></Link></Reveal></div></section></>;
}
