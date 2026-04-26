import { useState } from 'react';
import Reveal from './Reveal';

export default function ProductDashboard() {
  const [activeTab, setActiveTab] = useState('Treasury');
  const [activeFilter, setActiveFilter] = useState('1M');
  const [activeSide, setActiveSide] = useState('Operating');

  const tabs = ['Treasury', 'Cards', 'Wires', 'FX desk', 'Audit log'];
  const filters = ['1D', '1W', '1M', '1Y', 'ALL'];

  return (
    <section className="product" id="product">
      <div className="section-head">
        <Reveal className="section-eyebrow"><span className="index">[ § 02 / The Product ]</span> · <strong>One operating account.</strong></Reveal>
        <Reveal as="h2" className="section-title">A <em>real product</em>, not a <span className="accent">marketing illustration</span>.</Reveal>
      </div>

      <Reveal className="product-frame">
        <div className="product-tabs">
          {tabs.map(tab => (
            <button 
              key={tab}
              className={`product-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              <span className="indicator">{activeTab === tab ? '●' : '○'}</span>{tab}
            </button>
          ))}
          <span className="product-tabs-spacer"></span>
          <span className="product-controls">
            <span className="product-control">⌘K</span>
          </span>
        </div>

        <div className="product-body">
          <aside className="product-side">
            <div className="product-side-section">[ ACCOUNTS ]</div>
            <div className={`product-side-item ${activeSide === 'Operating' ? 'active' : ''}`} onClick={() => setActiveSide('Operating')}>
              <span className="dot"></span>Operating · USD <span className="count">$8.42M</span>
            </div>
            <div className={`product-side-item ${activeSide === 'EU' ? 'active' : ''}`} onClick={() => setActiveSide('EU')}>
              <span className="dot"></span>EU subsidiary · EUR <span className="count">€2.1M</span>
            </div>
            <div className={`product-side-item ${activeSide === 'UK' ? 'active' : ''}`} onClick={() => setActiveSide('UK')}>
              <span className="dot"></span>UK entity · GBP <span className="count">£840K</span>
            </div>
            <div className={`product-side-item ${activeSide === 'APAC' ? 'active' : ''}`} onClick={() => setActiveSide('APAC')}>
              <span className="dot"></span>APAC · JPY <span className="count">¥124M</span>
            </div>
            
            <div className="product-side-section">[ TOOLS ]</div>
            <div className="product-side-item"><span className="dot"></span>Payments</div>
            <div className="product-side-item"><span className="dot"></span>Cards <span className="count">42</span></div>
            <div className="product-side-item"><span className="dot"></span>Vendors <span className="count">128</span></div>
            <div className="product-side-item"><span className="dot"></span>Reports</div>
            
            <div className="product-side-section">[ TEAM ]</div>
            <div className="product-side-item"><span className="dot"></span>Approvals <span className="count">3</span></div>
            <div className="product-side-item"><span className="dot"></span>Members <span className="count">14</span></div>
          </aside>

          <main className="product-main">
            <div className="product-main-head">
              <div>
                <h3>Treasury overview</h3>
                <span className="sub">Updated 14:02:18 EST · auto-refreshes every 30s</span>
              </div>
              <div className="filter">
                {filters.map(f => (
                  <button 
                    key={f} 
                    className={activeFilter === f ? 'active' : ''}
                    onClick={() => setActiveFilter(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="balance-grid">
              <div className="balance">
                <div className="ccy"><span className="label">USD · Operating</span><span className="flag usd"></span></div>
                <div className="amt">$8,420,184.22</div>
                <div className="delta up">↑ 4.2% · +$340K MoM</div>
              </div>
              <div className="balance">
                <div className="ccy"><span className="label">EUR · Subsidiary</span><span className="flag eur"></span></div>
                <div className="amt">€2,148,902.50</div>
                <div className="delta up">↑ 1.8% · +€38K MoM</div>
              </div>
              <div className="balance">
                <div className="ccy"><span className="label">GBP · UK entity</span><span className="flag gbp"></span></div>
                <div className="amt">£842,500.00</div>
                <div className="delta dn">↓ 0.6% · −£5K MoM</div>
              </div>
              <div className="balance">
                <div className="ccy"><span className="label">JPY · APAC</span><span className="flag jpy"></span></div>
                <div className="amt">¥124,820,000</div>
                <div className="delta up">↑ 2.4% · +¥2.9M MoM</div>
              </div>
            </div>

            <div className="chart-card">
              <div className="chart-card-head">
                <div>
                  <h4>Cash flow · 30 days</h4>
                </div>
                <div className="stat">
                  <div className="v">+$2,840,127.40</div>
                  <div className="l">net positive</div>
                </div>
              </div>
              <svg className="chart-svg" viewBox="0 0 760 140" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#d4ff3d" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#d4ff3d" stopOpacity="0"/>
                  </linearGradient>
                  <pattern id="gridP" width="38" height="28" patternUnits="userSpaceOnUse">
                    <path d="M 38 0 L 0 0 0 28" fill="none" stroke="rgba(247,245,240,0.05)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="760" height="140" fill="url(#gridP)"/>
                <path d="M 0,90 L 38,84 L 76,92 L 114,72 L 152,80 L 190,64 L 228,68 L 266,52 L 304,58 L 342,40 L 380,46 L 418,32 L 456,38 L 494,28 L 532,30 L 570,22 L 608,30 L 646,18 L 684,26 L 722,16 L 760,22 L 760,140 L 0,140 Z" fill="url(#chartFill)"/>
                <path d="M 0,90 L 38,84 L 76,92 L 114,72 L 152,80 L 190,64 L 228,68 L 266,52 L 304,58 L 342,40 L 380,46 L 418,32 L 456,38 L 494,28 L 532,30 L 570,22 L 608,30 L 646,18 L 684,26 L 722,16 L 760,22" fill="none" stroke="#d4ff3d" strokeWidth="1.5"/>
                <circle cx="722" cy="16" r="3" fill="#d4ff3d"/>
                <circle cx="722" cy="16" r="6" fill="#d4ff3d" fillOpacity="0.3"/>
              </svg>
              <div className="chart-axis">
                <span>Mar 27</span><span>Apr 03</span><span>Apr 10</span><span>Apr 17</span><span>Apr 24</span><span>today</span>
              </div>
            </div>

            <div className="tx-card">
              <div className="tx-card-head">
                <h4>Recent activity</h4>
                <span className="more">view all 8,420 →</span>
              </div>
              <div className="tx-row">
                <span className="when">14:02 EST</span>
                <span className="who">Stripe Inc. <span className="ref">payout · ref VLT-83920</span></span>
                <span className="amt in">+ $142,890.00</span>
                <span className="status"><span className="settled"><span className="dot"></span>settled</span></span>
              </div>
              <div className="tx-row">
                <span className="when">14:02 EST</span>
                <span className="who">AWS EU-West <span className="ref">vendor · ref VLT-83919</span></span>
                <span className="amt out">– €18,420.00</span>
                <span className="status"><span className="settled"><span className="dot"></span>settled</span></span>
              </div>
              <div className="tx-row">
                <span className="when">14:01 EST</span>
                <span className="who">Acme Manufacturing <span className="ref">wire · ref VLT-83918</span></span>
                <span className="amt in">+ £286,500.00</span>
                <span className="status"><span className="pending"><span className="dot"></span>pending</span></span>
              </div>
              <div className="tx-row">
                <span className="when">14:01 EST</span>
                <span className="who">Payroll · 142 employees <span className="ref">batch · ref VLT-83917</span></span>
                <span className="amt out">– $612,840.00</span>
                <span className="status"><span className="settled"><span className="dot"></span>settled</span></span>
              </div>
            </div>
          </main>
        </div>
      </Reveal>
    </section>
  );
}
