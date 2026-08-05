import Link from "next/link";
import { SITE } from "../lib/site";
import { Icon } from "./Icons";

export default function MobileQuickActions() {
  return <nav className="mobile-quick-actions" aria-label="Quick actions"><Link href="/plans" className="quick-action"><Icon name="wifi" size={19} /><span>Plans</span></Link><Link href="/get-connection" className="quick-action quick-primary"><span><Icon name="bolt" size={19} /></span><b>Get connected</b></Link><a href={SITE.whatsappUrl} target="_blank" rel="noreferrer" className="quick-action"><Icon name="whatsapp" size={19} /><span>WhatsApp</span></a></nav>;
}
