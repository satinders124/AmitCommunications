import Link from "next/link";
import { Icon } from "./Icons";

export default function PageHero({ label, title, description, currentPage, image, children }) {
  return <section className="page-hero"><div className="page-hero-shape shape-a" /><div className="page-hero-shape shape-b" /><div className="shell page-hero-grid"><div><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>{currentPage}</span></div><p className="kicker">{label}</p><h1>{title}</h1>{description && <p className="page-hero-copy">{description}</p>}{children}</div>{image && <div className="page-hero-image"><img src={image} alt="" /><span><Icon name="wifi" size={20} /> Amit Communications</span></div>}</div></section>;
}
