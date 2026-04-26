import Reveal from './Reveal';

export default function AudienceSection() {
  return (
    <section>
      <div className="section-head">
        <Reveal className="section-eyebrow"><span className="index">[ § 05 / Audience ]</span> · <strong>Two kinds of operators.</strong></Reveal>
        <Reveal as="h2" className="section-title">Built for the people who actually <em>read</em> the <span className="accent">statements</span>.</Reveal>
      </div>

      <div className="builtfor-grid">
        <Reveal as="article" className="audience">
          <div className="audience-meta">
            <span className="index">[ A ] · For Treasury teams</span>
            <span>Series B+ · Public co's</span>
          </div>
          <h3>You manage <em>nine-figure</em> balances. We don't waste your time.</h3>
          <p>Multi-entity consolidation. Sweep schedules. Counterparty diversification. Bank-grade controls without the bank-grade ergonomics.</p>
          <ul className="audience-feats">
            <li>Sweep up to $125M into Treasury bills automatically — yields 4.85% APY</li>
            <li>Diversify across four partner banks; consolidated reporting in one view</li>
            <li>Approval workflows with up to seven signers per transaction</li>
            <li>Real-time NetSuite, QuickBooks, and Xero sync — no CSV imports</li>
          </ul>
          <blockquote className="audience-quote">
            "Vault replaced our treasury management system, our FX provider, and our wire desk. The reconciliation alone saves us a person."
            <span className="author"><strong>Diane Park</strong> · VP Finance, Halcyon (Series C, $200M ARR)</span>
          </blockquote>
        </Reveal>

        <Reveal as="article" className="audience" delay={0.1}>
          <div className="audience-meta">
            <span className="index">[ B ] · For Founders</span>
            <span>Pre-seed → Series A</span>
          </div>
          <h3>You're <em>three people</em> in a room. We make banking the boring part.</h3>
          <p>Open an account in twenty minutes. Wire money in five. Issue cards in two. No relationship managers. No phone calls. Just software.</p>
          <ul className="audience-feats">
            <li>Account opens in under twenty minutes — fully online, no faxes, ever</li>
            <li>Free wires, free FX up to $50K/month, free virtual cards</li>
            <li>Built-in expense tracking, receipt capture, contractor payments</li>
            <li>Connect Stripe, Mercury, your investors' wires — all in one ledger</li>
          </ul>
          <blockquote className="audience-quote">
            "We were going to use Mercury. We're glad we waited a week and found Vault. The API alone is reason enough."
            <span className="author"><strong>Marcus Chen</strong> · CEO, Pylon (Seed, YC W24)</span>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
