import Link from "next/link";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import { Icon } from "../../components/Icons";

export const metadata = { title: "Helpful Notes" };

const posts = [
  { href: "/stay-connected-with-amit-communications", title: "Stay Connected with Amit Communications", copy: "A quick look at choosing fast, reliable fiber internet for your daily online routines.", image: "/images/fiber-neighborhood.jpg", label: "Connection basics" },
  { href: "/stay-connected-with-amit-communications-reliable-fiber-internet", title: "Reliable Fiber Internet for Everyday Life", copy: "What fast, stable BSNL fiber can bring to work, entertainment and the people at home.", image: "/images/wifi-router.jpg", label: "Everyday internet" },
];

export default function BlogPage() {
  return <><PageHero label="Helpful notes" currentPage="Notes" title={<>Small reads for<br />a better <em>connection.</em></>} description="Simple ideas from Amit Communications about getting more from your everyday internet." /><section className="notes-section section-space"><div className="shell"><Reveal className="section-heading"><p className="kicker">Helpful notes</p><h2>Read, choose,<br /><em>get connected.</em></h2></Reveal><div className="notes-grid">{posts.map((post, index) => <Reveal className="note-card" delay={index * 110} key={post.href}><Link href={post.href} className="note-image"><img src={post.image} alt="" /><span><Icon name="arrowUpRight" size={20} /></span></Link><div><p className="kicker">{post.label}</p><h3>{post.title}</h3><p>{post.copy}</p><Link href={post.href} className="text-link">Read note <Icon name="arrowRight" size={18} /></Link></div></Reveal>)}</div></div></section></>;
}
