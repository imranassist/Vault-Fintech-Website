import { Link } from 'react-router-dom';
import Reveal from './Reveal';

export default function PricingSection() {
  return (
    <section id="pricing">
      <div className="section-head">
        <Reveal className="section-eyebrow"><span className="index">[ § 07 / Pricing ]</span> · <strong>Honest, ledgered.</strong></Reveal>
        <Reveal as="h2" className="section-title">Three tiers. <em>No</em> "contact us" <span className="accent">games</span>.</Reveal>
      </div>

      <Reveal className="pricing-table">
        <div className="pricing-row head">
          <div className="cell-blank"></div>
          <div className="cell-tier">
            <div className="tier-name">Starter</div>
            <div className="tier-desc">For early-stage companies finding product-market fit.</div>
            <div className="tier-price">$0<span className="unit">/ month</span></div>
            <div className="tier-sub">no minimums · no setup fees</div>
            <Link to="/signup" className="tier-cta">Open free account →</Link>
          </div>
          <div className="cell-tier featured">
            <div className="tier-name">Growth</div>
            <div className="tier-desc">For revenue-generating companies that need real banking infrastructure.</div>
            <div className="tier-price">$249<span className="unit">/ month</span></div>
            <div className="tier-sub">incl. 50 free wires + 1% FX up to $250K</div>
            <Link to="/signup" className="tier-cta">Start 30-day trial →</Link>
          </div>
          <div className="cell-tier">
            <div className="tier-name">Enterprise</div>
            <div className="tier-desc">For Series B+ and public companies. Custom contracts, dedicated team.</div>
            <div className="tier-price">Custom</div>
            <div className="tier-sub">priced on volume, talks within 24h</div>
            <Link to="/contact" className="tier-cta">Talk to founders →</Link>
          </div>
        </div>

        <div className="pricing-row">
          <div className="cell-feature">Operating accounts</div>
          <div className="cell-feature">1 currency</div>
          <div className="cell-feature">Up to 4 currencies</div>
          <div className="cell-feature">All 32 currencies</div>
        </div>
        <div className="pricing-row">
          <div className="cell-feature">Domestic wires</div>
          <div className="cell-feature">$15 / each</div>
          <div className="cell-feature">50 free, then $5</div>
          <div className="cell-feature">Unlimited free</div>
        </div>
        <div className="pricing-row">
          <div className="cell-feature">FX spread</div>
          <div className="cell-feature">1.4%</div>
          <div className="cell-feature">1.0%</div>
          <div className="cell-feature">0.4%</div>
        </div>
        <div className="pricing-row">
          <div className="cell-feature">Cards (virtual + physical)</div>
          <div className="cell-feature">5</div>
          <div className="cell-feature">100</div>
          <div className="cell-feature">Unlimited</div>
        </div>
        <div className="pricing-row">
          <div className="cell-feature">Treasury sweep · APY</div>
          <div className="cell-feature"><span className="x">—</span></div>
          <div className="cell-feature">4.85%</div>
          <div className="cell-feature">4.85% + custom</div>
        </div>
        <div className="pricing-row">
          <div className="cell-feature">API · SDKs · webhooks</div>
          <div className="cell-feature"><span className="check"></span></div>
          <div className="cell-feature"><span className="check"></span></div>
          <div className="cell-feature"><span className="check"></span></div>
        </div>
        <div className="pricing-row">
          <div className="cell-feature">Approval workflows</div>
          <div className="cell-feature">2 signers</div>
          <div className="cell-feature">Up to 4</div>
          <div className="cell-feature">Up to 7 + custom</div>
        </div>
        <div className="pricing-row">
          <div className="cell-feature">Support</div>
          <div className="cell-feature"><span className="dim">Email · 24h</span></div>
          <div className="cell-feature"><span className="dim">Slack · 4h</span></div>
          <div className="cell-feature"><span className="dim">Dedicated team · 1h</span></div>
        </div>

        <div className="pricing-foot">
          <span><strong>All plans:</strong> SOC 2 II · ISO 27001 · FDIC coverage up to $125M</span>
          <span>Switch tiers anytime · prorated</span>
        </div>
      </Reveal>
    </section>
  );
}
