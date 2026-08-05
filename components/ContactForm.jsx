"use client";

import { useState } from "react";
import { SITE } from "../lib/site";
import { Icon } from "./Icons";

export default function ContactForm() {
  const [values, setValues] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const update = (event) => setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
  function submit(event) { event.preventDefault(); const message = `Hello Amit Communications,\n\nName: ${values.firstName} ${values.lastName}\nEmail: ${values.email}\nMessage: ${values.message}`; setSent(true); window.open(`${SITE.whatsappUrl.split("?")[0]}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer"); }
  return <form className="simple-form" onSubmit={submit}><div className="form-grid"><label>First name <input name="firstName" required value={values.firstName} onChange={update} placeholder="First name" /></label><label>Last name <input name="lastName" value={values.lastName} onChange={update} placeholder="Last name" /></label><label className="wide">Your email <span>*</span><input type="email" name="email" required value={values.email} onChange={update} placeholder="you@example.com" /></label><label className="wide">Message <span>*</span><textarea name="message" required rows="5" value={values.message} onChange={update} placeholder="What can we help with?" /></label></div><div className="form-submit"><button className="button" type="submit">Send via WhatsApp <Icon name="whatsapp" size={18} /></button><span><Icon name="whatsapp" size={15} /> Review the message before sending.</span></div>{sent && <p className="form-success"><Icon name="check" size={16} /> WhatsApp has opened with your message.</p>}</form>;
}
