import PageHero from "../../components/PageHero";
import ContactForm from "../../components/ContactForm";
import Reveal from "../../components/Reveal";
import { SITE } from "../../lib/site";
import { Icon } from "../../components/Icons";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return <><PageHero label="Get in touch" currentPage="Contact" title={<>Need a hand?<br />Let&apos;s <em>talk.</em></>} description="Questions, plan advice or support—reach out however feels easiest." image="/images/contact-install.jpg" /><section className="contact-section section-space"><div className="shell contact-layout"><Reveal className="contact-copy"><p className="kicker">Contact Amit Communications</p><h2>Here when you<br />need <em>us.</em></h2><div className="contact-list"><a href={SITE.phonePrimaryHref}><span><Icon name="phone" size={20} /></span><div><small>Call</small><b>{SITE.phonePrimary}</b></div><Icon name="arrowUpRight" size={17} /></a><a href={SITE.phoneSecondaryHref}><span><Icon name="phone" size={20} /></span><div><small>Alternative number</small><b>{SITE.phoneSecondary}</b></div><Icon name="arrowUpRight" size={17} /></a><a href={`mailto:${SITE.email}`}><span><Icon name="mail" size={20} /></span><div><small>Email</small><b>{SITE.email}</b></div><Icon name="arrowUpRight" size={17} /></a><a href={SITE.whatsappUrl} target="_blank" rel="noreferrer"><span><Icon name="whatsapp" size={20} /></span><div><small>Message</small><b>Chat on WhatsApp</b></div><Icon name="arrowUpRight" size={17} /></a></div></Reveal><Reveal className="contact-form-wrap" delay={110}><div className="contact-form-heading"><p className="kicker">Send a message</p><h3>What&apos;s on your mind?</h3><p>Complete the form and keep the conversation moving on WhatsApp.</p></div><ContactForm /></Reveal></div></section></>;
}
