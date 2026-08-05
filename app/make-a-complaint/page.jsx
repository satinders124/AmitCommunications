import Link from "next/link";
import PageHero from "../../components/PageHero";
import ComplaintForm from "../../components/ComplaintForm";
import Reveal from "../../components/Reveal";
import { Icon } from "../../components/Icons";

export const metadata = { title: "Make a Complaint" };

export default function ComplaintPage() {
  return <><PageHero label="Support request" currentPage="Make a complaint" title={<>Tell us what&apos;s<br />not <em>working.</em></>} description="Send the team a clear support request with the details needed to look into it." image="/images/contact-install.jpg"><Link href="/contact" className="text-link">Prefer to contact us first? <Icon name="arrowRight" size={18} /></Link></PageHero><section className="complaint-section section-space"><div className="shell complaint-layout"><Reveal className="complaint-copy"><p className="kicker">Make a complaint</p><h2>We&apos;ll listen,<br />then <em>help.</em></h2><p className="section-lead">Tell us what happened and include the best contact details to reach you. The completed form opens a support email in your own email application.</p><div className="complaint-notes"><p><Icon name="check" size={16} /> Keep the issue description clear and specific.</p><p><Icon name="check" size={16} /> Include the number connected to your service.</p><p><Icon name="check" size={16} /> Your email app opens before your request is sent.</p></div></Reveal><Reveal className="complaint-form-wrap" delay={110}><ComplaintForm /></Reveal></div></section></>;
}
