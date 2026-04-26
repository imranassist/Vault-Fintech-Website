import Reveal from './Reveal';
import AnimatedCounter from './AnimatedCounter';

export default function StatsSection() {
  return (
    <section className="megastat">
      <Reveal className="megastat-meta">
        <span><strong>[ § 04 / The Numbers ]</strong> · Last twelve months</span>
        <span className="lime">● Updated daily · auto from production</span>
      </Reveal>
      <Reveal as="h2" className="megastat-num" style={{ marginTop: '40px' }}>
        <span className="currency">$</span>
        <AnimatedCounter target={84.7} suffix="B" decimals={1} delay={0.1} />
      </Reveal>
      <Reveal as="p" className="megastat-cap" delay={0.1}>
        Moved through Vault accounts in the last twelve months. <em>Across 184 markets, in 32 currencies, by 12,000+ companies.</em>
      </Reveal>
      <div className="megastat-foot">
        <Reveal className="cell" delay={0}>
          <div className="v"><AnimatedCounter target={12.4} decimals={1} />K</div>
          <div className="l">Active customers</div>
        </Reveal>
        <Reveal className="cell" delay={0.1}>
          <div className="v"><AnimatedCounter target={184} /></div>
          <div className="l">Markets served</div>
        </Reveal>
        <Reveal className="cell" delay={0.2}>
          <div className="v"><AnimatedCounter target={99.99} suffix="%" decimals={2} /></div>
          <div className="l">Uptime · 12 mo</div>
        </Reveal>
        <Reveal className="cell" delay={0.3}>
          <div className="v"><AnimatedCounter target={14} suffix="ms" /></div>
          <div className="l">p99 API latency</div>
        </Reveal>
      </div>
    </section>
  );
}
