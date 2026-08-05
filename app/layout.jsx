import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import MobileQuickActions from "../components/MobileQuickActions";
import { Icon } from "../components/Icons";

export const metadata = {
  title: { default: "Amit Communications | Reliable BSNL Fiber Internet", template: "%s | Amit Communications" },
  description: "Fast, stable BSNL fiber internet and Wi-Fi setup from Amit Communications.",
  icons: { icon: "/images/amit-mark.jpeg" },
};

export default function RootLayout({ children }) {
  return <html lang="en-IN"><body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader /><main id="main-content">{children}</main><SiteFooter /><MobileQuickActions /><a className="whatsapp-float" href="https://wa.me/918360529889?text=Hello%2C%20Do%20you%20want%20Connection%3F" target="_blank" rel="noreferrer" aria-label="Chat with Amit Communications on WhatsApp"><Icon name="whatsapp" size={22} /><span>Chat</span></a></body></html>;
}
