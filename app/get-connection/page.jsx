import { Suspense } from "react";
import PageHero from "../../components/PageHero";
import ConnectionForm from "../../components/ConnectionForm";
import Reveal from "../../components/Reveal";
import { Icon } from "../../components/Icons";

export const metadata = { title: "Get Connection" };

export default function GetConnectionPage() {
  return <><PageHero label="Your next connection" currentPage="Get connection" title={<>A good signal is<br />a great <em>start.</em></>} description="Complete this quick request and we&apos;ll prepare a WhatsApp message for the Amit Communications team." image="/images/family-wifi.jpg"><span className="hero-note"><Icon name="shield" size={16} /> Your details stay in your browser until you decide to send the WhatsApp message.</span></PageHero><section className="connection-section section-space"><div className="shell connection-layout"><Reveal className="connection-copy"><p className="kicker">Get connected</p><h2>A few details.<br />Then you&apos;re <em>on your way.</em></h2><p className="section-lead">Use the form to tell the team what you need. They can confirm availability and guide you through the next step.</p><div className="connection-steps"><p><b>01</b><span><strong>Share your details</strong>A quick start with the essentials.</span></p><p><b>02</b><span><strong>Choose a plan</strong>Select a plan now or ask for guidance.</span></p><p><b>03</b><span><strong>Send on WhatsApp</strong>Review your request before sending it.</span></p></div></Reveal><Reveal className="connection-form-wrap" delay={110}><Suspense fallback={<p>Loading form…</p>}><ConnectionForm /></Suspense></Reveal></div></section></>;
}
