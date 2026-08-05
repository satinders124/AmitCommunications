export const SITE = {
  name: "Amit Communications",
  email: "ak3545102@gmail.com",
  phonePrimary: "83605 29889",
  phoneSecondary: "76966 66146",
  phonePrimaryHref: "tel:+918360529889",
  phoneSecondaryHref: "tel:+917696666146",
  whatsapp: "918360529889",
  whatsappUrl: "https://wa.me/918360529889?text=Hello%2C%20Do%20you%20want%20Connection%3F",
};

export const plans = [
  { price: "399", speed: "40", data: "1400 GB", name: "Everyday", accent: "coral", description: "A practical start for daily browsing and streaming." },
  { price: "495", speed: "100", data: "3300 GB", name: "Home", accent: "blue", description: "More room for the devices everyone uses.", featured: true },
  { price: "595", speed: "150", data: "3300 GB", name: "Stream", accent: "yellow", description: "Extra speed for entertainment and sharing." },
  { price: "695", speed: "200", data: "3300 GB", name: "Connect", accent: "mint", description: "Comfortable connectivity for busy households." },
  { price: "777", speed: "250", data: "3300 GB", name: "Plus", accent: "purple", description: "A faster option for more online moments." },
  { price: "1299", speed: "200", data: "4000 GB", name: "Work + Home", accent: "coral", description: "More data allowance for connected routines." },
  { price: "1499", speed: "300", data: "3300 GB", name: "Maximum", accent: "blue", description: "The fastest listed plan for high-demand homes." },
];

export const faqs = [
  { question: "How do I subscribe?", answer: "Visit the Get Connection page, share your details and continue the enquiry directly on WhatsApp with the Amit Communications team." },
  { question: "What plans are available?", answer: "The current listed options range from 40 Mbps to 300 Mbps with different data limits. Visit the plans page to compare each option." },
  { question: "How do I report a service issue?", answer: "You can use the Make a Complaint page, WhatsApp the team or call +91 83605 29889 directly for support." },
  { question: "Can I upgrade later?", answer: "Yes. The existing site notes that plan upgrades are possible by contacting customer support." },
  { question: "What payment methods are accepted?", answer: "The existing site lists online payments, UPI and bank transfers. Confirm the current payment details directly with the team." },
];

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/plans", label: "Plans" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Notes" },
  { href: "/contact", label: "Contact" },
];
