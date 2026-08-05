"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { plans, SITE } from "../lib/site";
import { Icon } from "./Icons";

export default function ConnectionForm() {
  const params = useSearchParams();
  const planPrice = params.get("plan") || "";
  const [values, setValues] = useState(() => ({ firstName: "", lastName: "", fatherName: "", mobile: "", email: "", address: "", plan: planPrice }));
  const [sent, setSent] = useState(false);
  const update = (event) => setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
  function submit(event) {
    event.preventDefault();
    const plan = plans.find((item) => item.price === values.plan);
    const message = ["Hello Amit Communications, I would like a new BSNL Fiber connection.", "", `Name: ${values.firstName} ${values.lastName}`.trim(), `Father's name: ${values.fatherName}`, `Mobile: ${values.mobile}`, `Email: ${values.email}`, `Address: ${values.address}`, plan ? `Preferred plan: ₹${plan.price}/month — ${plan.speed} Mbps` : "Preferred plan: Please advise"].join("\n");
    setSent(true);
    window.open(`${SITE.whatsappUrl.split("?")[0]}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }
  return <form className="connection-form" onSubmit={submit}><div className="form-head"><span><Icon name="home" size={20} /></span><div><h3>Let&apos;s start with the basics</h3><p>We&apos;ll prepare your enquiry for WhatsApp. You review it before sending.</p></div></div>{planPrice && <p className="chosen-plan"><Icon name="star" size={15} /> Selected plan: <b>₹{planPrice}/month</b></p>}<div className="form-grid"><label>First name <input name="firstName" required value={values.firstName} onChange={update} placeholder="First name" /></label><label>Last name <input name="lastName" value={values.lastName} onChange={update} placeholder="Last name" /></label><label className="wide">Father&apos;s name <span>*</span><input name="fatherName" required value={values.fatherName} onChange={update} placeholder="Father's name" /></label><label>Mobile number <span>*</span><input type="tel" name="mobile" required value={values.mobile} onChange={update} placeholder="Your mobile number" /></label><label>Email <span>*</span><input type="email" name="email" required value={values.email} onChange={update} placeholder="you@example.com" /></label><label className="wide">Address <span>*</span><textarea name="address" required value={values.address} onChange={update} rows="3" placeholder="House / street / area" /></label><label className="wide">Preferred plan <select name="plan" value={values.plan} onChange={update}><option value="">Help me choose</option>{plans.map((plan) => <option key={plan.price} value={plan.price}>₹{plan.price}/month — {plan.speed} Mbps</option>)}</select></label></div><div className="form-submit"><button type="submit" className="button">Continue on WhatsApp <Icon name="whatsapp" size={18} /></button><span><Icon name="shield" size={15} /> No details are sent until you continue.</span></div>{sent && <p className="form-success"><Icon name="check" size={16} /> WhatsApp has opened with your request.</p>}</form>;
}
