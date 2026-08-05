"use client";

import { useState } from "react";
import { SITE } from "../lib/site";
import { Icon } from "./Icons";

export default function ComplaintForm() {
  const [values, setValues] = useState({ firstName: "", lastName: "", mobile: "", email: "", issue: "", message: "" });
  const [sent, setSent] = useState(false);
  const update = (event) => setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
  function submit(event) { event.preventDefault(); const body = [`Name: ${values.firstName} ${values.lastName}`, `Mobile: ${values.mobile}`, `Email: ${values.email}`, `Issue: ${values.issue}`, "", values.message].join("\n"); setSent(true); window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Amit Communications — Support Complaint")}&body=${encodeURIComponent(body)}`; }
  return <form className="simple-form complaint-form" onSubmit={submit}><div className="form-grid"><label>First name <input name="firstName" required value={values.firstName} onChange={update} placeholder="First name" /></label><label>Last name <input name="lastName" value={values.lastName} onChange={update} placeholder="Last name" /></label><label>Mobile number <span>*</span><input type="tel" name="mobile" required value={values.mobile} onChange={update} placeholder="Your number" /></label><label>Your email <span>*</span><input type="email" name="email" required value={values.email} onChange={update} placeholder="you@example.com" /></label><label className="wide">What is the issue? <span>*</span><input name="issue" required value={values.issue} onChange={update} placeholder="Short issue title" /></label><label className="wide">Message <span>*</span><textarea name="message" required rows="5" value={values.message} onChange={update} placeholder="Tell us what happened and when it started." /></label></div><div className="form-submit"><button className="button" type="submit">Create support email <Icon name="mail" size={18} /></button><span><Icon name="mail" size={15} /> Opens your email app before anything is sent.</span></div>{sent && <p className="form-success"><Icon name="check" size={16} /> Your email app should now be open.</p>}</form>;
}
