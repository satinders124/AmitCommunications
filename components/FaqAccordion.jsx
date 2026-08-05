"use client";

import { useState } from "react";
import { faqs } from "../lib/site";
import { Icon } from "./Icons";

export default function FaqAccordion({ limit }) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  const [open, setOpen] = useState(0);
  return <div className="faq-list">{items.map((item, index) => <article className={`faq-item ${open === index ? "open" : ""}`} key={item.question}><button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{item.question}</span><Icon name={open === index ? "minus" : "plus"} size={18} /></button><div className="faq-answer"><p>{item.answer}</p></div></article>)}</div>;
}
