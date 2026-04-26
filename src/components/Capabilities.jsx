import Reveal from './Reveal';

export default function Capabilities() {
  return (
    <section className="caps" id="caps">
      <div className="section-head">
        <Reveal className="section-eyebrow"><span className="index">[ § 03 / Capabilities ]</span> · <strong>Six things, done well.</strong></Reveal>
        <Reveal as="h2" className="section-title">Everything <em>your</em> <span className="accent">CFO</span> wants. Nothing they don't.</Reveal>
      </div>

      <div className="caps-grid">
        <Reveal className="cap" delay={0}>
          <div className="cap-num">[ 0001 ] <span className="cap-arrow">↗</span></div>
          <h3>Multi-currency <em>treasury</em></h3>
          <p>Hold, send, and receive in 32 currencies from one operating account. Native local rails — ACH, SEPA, Faster Payments, SWIFT — no third parties.</p>
          <div className="cap-meta">
            <span><strong>32</strong> currencies</span>
            <span><strong>0.4%</strong> FX spread</span>
          </div>
        </Reveal>

        <Reveal className="cap" delay={0.05}>
          <div className="cap-num">[ 0002 ] <span className="cap-arrow">↗</span></div>
          <h3>Real-time <em>wires</em></h3>
          <p>Domestic wires settle in 60 seconds. International in under an hour. SWIFT GPI tracking on every cross-border payment, end-to-end.</p>
          <div className="cap-meta">
            <span><strong>60s</strong> domestic</span>
            <span><strong>&lt; 1h</strong> international</span>
          </div>
        </Reveal>

        <Reveal className="cap" delay={0.1}>
          <div className="cap-num">[ 0003 ] <span className="cap-arrow">↗</span></div>
          <h3>Programmable <em>cards</em></h3>
          <p>Issue virtual and physical cards with rules built in. Vendor-locked, amount-capped, time-bound. Reconcile to GL automatically.</p>
          <div className="cap-meta">
            <span><strong>2.5%</strong> cashback</span>
            <span><strong>Unlimited</strong> cards</span>
          </div>
        </Reveal>

        <Reveal className="cap" delay={0}>
          <div className="cap-num">[ 0004 ] <span className="cap-arrow">↗</span></div>
          <h3>Treasury <em>sweep</em></h3>
          <p>Idle balances earn 4.85% APY in our managed Treasury bills program. SIPC and FDIC coverage up to $125M through partner banks.</p>
          <div className="cap-meta">
            <span><strong>4.85%</strong> APY</span>
            <span><strong>$125M</strong> insured</span>
          </div>
        </Reveal>

        <Reveal className="cap" delay={0.05}>
          <div className="cap-num">[ 0005 ] <span className="cap-arrow">↗</span></div>
          <h3>API & <em>SDKs</em></h3>
          <p>RESTful API, webhooks, and SDKs for Node, Python, Go, Ruby. Sandbox in 2 minutes. Production in days, not months. Your engineers will thank you.</p>
          <div className="cap-meta">
            <span><strong>4</strong> SDKs</span>
            <span><strong>14ms</strong> p99 latency</span>
          </div>
        </Reveal>

        <Reveal className="cap" delay={0.1}>
          <div className="cap-num">[ 0006 ] <span className="cap-arrow">↗</span></div>
          <h3>Audit & <em>compliance</em></h3>
          <p>SOC 2 Type II, ISO 27001, PCI DSS Level 1. Immutable audit log, role-based permissions, dual approvals. Your auditors will thank you too.</p>
          <div className="cap-meta">
            <span><strong>SOC 2 II</strong></span>
            <span><strong>ISO 27001</strong></span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
