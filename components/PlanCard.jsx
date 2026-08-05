import Link from "next/link";
import { Icon } from "./Icons";

export default function PlanCard({ plan, index, compact = false }) {
  return <article className={`plan-card ${plan.accent} ${plan.featured ? "featured" : ""} ${compact ? "compact" : ""}`}><div className="plan-stripe" /><div className="plan-card-top"><span>{plan.featured ? "People&apos;s pick" : plan.name}</span><small>0{index + 1}</small></div><p className="plan-price"><sup>₹</sup>{plan.price}<i>/mo</i></p><div className="plan-speed"><b>{plan.speed}</b><span>Mbps</span></div><p className="plan-data">Data up to <strong>{plan.data}</strong></p>{!compact && <p className="plan-copy">{plan.description}</p>}{!compact && <div className="plan-perks"><span><Icon name="check" size={14} /> Fiber connection</span><span><Icon name="check" size={14} /> Wi-Fi-ready home</span></div>}<Link href={`/get-connection?plan=${plan.price}`} className="plan-link">Choose {plan.name} <Icon name="arrowRight" size={17} /></Link></article>;
}
