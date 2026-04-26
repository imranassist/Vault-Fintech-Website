import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import WordReveal from './WordReveal';

export default function HeroSection() {
  return (
    <header className="hero">
      <div className="hero-frame">
        <div className="hero-left">
          <div className="hero-meta">
            <span className="index">[ N°001 / VAULT ]</span>
            <span><span className="lime-dot">●</span> Backed by Sequoia & Ribbit</span>
            <span>Est. 2021 · NYC + Singapore</span>
          </div>

          <h1 className="hero-title">
            <WordReveal delay={200}>Banking,</WordReveal><br />
            <WordReveal delay={280} className="italic">ledgered.</WordReveal><br />
            <WordReveal delay={360}>For <span className="underline">serious</span></WordReveal>{' '}
            <WordReveal delay={440} className="italic">operators.</WordReveal>
          </h1>

          <Reveal as="p" className="hero-blurb" delay={0.1}>
            Multi-currency operating accounts, <strong>real-time FX</strong>, programmable wires, and an API your engineers will actually like. Built for treasury teams, finance ops, and the founders who do their own books at 2am.
          </Reveal>

          <Reveal className="hero-actions" delay={0.2}>
            <Link to="/signup" className="btn btn-lime">Open an account <span className="arrow">↗</span></Link>
            <Link to="#" className="btn btn-ghost">Watch the 2-min demo</Link>
          </Reveal>

          <Reveal className="hero-creds" delay={0.3}>
            <span><strong>$2.4B+</strong> moved monthly</span>
            <span><strong>32</strong> currencies</span>
            <span><strong>99.99%</strong> uptime</span>
            <span><strong>SOC 2 II</strong> · ISO 27001</span>
          </Reveal>
        </div>

        <Reveal className="hero-right" delay={0.4}>
          <div className="live-feed">
            <div className="live-feed-head">
              <span className="title">$ tail -f vault/transactions.log</span>
              <span className="live"><span className="pulse"></span>STREAMING</span>
            </div>
            <div className="live-feed-list">
              <div className="live-feed-track">
                <div className="live-row"><span className="time">14:02:18</span><span className="desc">Stripe Inc. <span className="from">/ payout</span></span><span className="amount in">+ 142,890.00</span><span className="ccy">USD</span></div>
                <div className="live-row"><span className="time">14:02:15</span><span className="desc">AWS EU-West <span className="from">/ vendor</span></span><span className="amount out">– 18,420.00</span><span className="ccy">EUR</span></div>
                <div className="live-row"><span className="time">14:02:11</span><span className="desc">Acme Manufacturing <span className="from">/ wire</span></span><span className="amount in">+ 286,500.00</span><span className="ccy">GBP</span></div>
                <div className="live-row"><span className="time">14:02:08</span><span className="desc">Payroll · 142 employees</span><span className="amount out">– 612,840.00</span><span className="ccy">USD</span></div>
                <div className="live-row"><span className="time">14:02:03</span><span className="desc">FX swap <span className="from">/ EUR → JPY</span></span><span className="amount out">– 89,200.00</span><span className="ccy">EUR</span></div>
                <div className="live-row"><span className="time">14:01:57</span><span className="desc">Mercato GmbH <span className="from">/ invoice 4421</span></span><span className="amount in">+ 47,200.00</span><span className="ccy">EUR</span></div>
                <div className="live-row"><span className="time">14:01:52</span><span className="desc">Orbit Holdings <span className="from">/ dividend</span></span><span className="amount in">+ 1,240,000.00</span><span className="ccy">USD</span></div>
                <div className="live-row"><span className="time">14:01:48</span><span className="desc">Datadog Inc. <span className="from">/ subscription</span></span><span className="amount out">– 4,890.00</span><span className="ccy">USD</span></div>
                <div className="live-row"><span className="time">14:01:42</span><span className="desc">Treasury sweep <span className="from">/ overnight</span></span><span className="amount in">+ 8,420.55</span><span className="ccy">USD</span></div>
                <div className="live-row"><span className="time">14:01:38</span><span className="desc">Card · 14 transactions</span><span className="amount out">– 12,440.18</span><span className="ccy">USD</span></div>
                {/* repeat for loop */}
                <div className="live-row"><span className="time">14:02:18</span><span className="desc">Stripe Inc. <span className="from">/ payout</span></span><span className="amount in">+ 142,890.00</span><span className="ccy">USD</span></div>
                <div className="live-row"><span className="time">14:02:15</span><span className="desc">AWS EU-West <span className="from">/ vendor</span></span><span className="amount out">– 18,420.00</span><span className="ccy">EUR</span></div>
                <div className="live-row"><span className="time">14:02:11</span><span className="desc">Acme Manufacturing <span className="from">/ wire</span></span><span className="amount in">+ 286,500.00</span><span className="ccy">GBP</span></div>
                <div className="live-row"><span className="time">14:02:08</span><span className="desc">Payroll · 142 employees</span><span className="amount out">– 612,840.00</span><span className="ccy">USD</span></div>
                <div className="live-row"><span className="time">14:02:03</span><span className="desc">FX swap <span className="from">/ EUR → JPY</span></span><span className="amount out">– 89,200.00</span><span className="ccy">EUR</span></div>
                <div className="live-row"><span className="time">14:01:57</span><span className="desc">Mercato GmbH <span className="from">/ invoice 4421</span></span><span className="amount in">+ 47,200.00</span><span className="ccy">EUR</span></div>
                <div className="live-row"><span className="time">14:01:52</span><span className="desc">Orbit Holdings <span className="from">/ dividend</span></span><span className="amount in">+ 1,240,000.00</span><span className="ccy">USD</span></div>
                <div className="live-row"><span className="time">14:01:48</span><span className="desc">Datadog Inc. <span className="from">/ subscription</span></span><span className="amount out">– 4,890.00</span><span className="ccy">USD</span></div>
                <div className="live-row"><span className="time">14:01:42</span><span className="desc">Treasury sweep <span className="from">/ overnight</span></span><span className="amount in">+ 8,420.55</span><span className="ccy">USD</span></div>
                <div className="live-row"><span className="time">14:01:38</span><span className="desc">Card · 14 transactions</span><span className="amount out">– 12,440.18</span><span className="ccy">USD</span></div>
              </div>
            </div>
            <div className="live-feed-foot">
              <span><strong>Today:</strong> 8,420 transactions · $24.8M moved</span>
              <span>Avg latency · 87ms</span>
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
