import { Icon } from "./Icons";

export default function ConnectionWorkspace() {
  return (
    <div className="connection-workspace" aria-label="Reliable internet connection visual">
      <div className="workspace-orb orb-one" /><div className="workspace-orb orb-two" />
      <div className="workspace-header"><span><i /> Connection ready</span><small>AMIT / BSNL FIBER</small></div>
      <div className="speed-dial"><div className="speed-dial-inner"><small>UP TO</small><strong>300</strong><span>Mbps</span></div><i className="dial-tick tick-one" /><i className="dial-tick tick-two" /><i className="dial-tick tick-three" /></div>
      <div className="workspace-router"><img src="/images/hero-router.jpg" alt="Modern Wi-Fi router" /><span><Icon name="wifi" size={16} /> Home network</span></div>
      <div className="workspace-stat stat-one"><Icon name="home" size={18} /><div><small>Coverage</small><b>Home-ready</b></div></div>
      <div className="workspace-stat stat-two"><Icon name="headset" size={18} /><div><small>Support</small><b>Always close</b></div></div>
      <div className="workspace-line line-one" /><div className="workspace-line line-two" />
      <div className="workspace-devices"><span><Icon name="wifi" size={14} /> TV</span><span><Icon name="wifi" size={14} /> Work</span><span><Icon name="wifi" size={14} /> Home</span></div>
    </div>
  );
}
