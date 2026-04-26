import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-inner">
        <span className="live-pill"><span className="pulse"></span>MARKETS · LIVE</span>
        <div className="ticker">
          <div className="ticker-track">
            <span><span className="pair">EUR/USD</span> 1.0842 <span className="up">+0.12%</span></span>
            <span className="sep">·</span>
            <span><span className="pair">GBP/USD</span> 1.2651 <span className="up">+0.08%</span></span>
            <span className="sep">·</span>
            <span><span className="pair">USD/JPY</span> 154.22 <span className="dn">-0.24%</span></span>
            <span className="sep">·</span>
            <span><span className="pair">USD/CHF</span> 0.9123 <span className="up">+0.04%</span></span>
            <span className="sep">·</span>
            <span><span className="pair">USD/CAD</span> 1.3712 <span className="dn">-0.11%</span></span>
            <span className="sep">·</span>
            <span><span className="pair">AUD/USD</span> 0.6584 <span className="up">+0.19%</span></span>
            <span className="sep">·</span>
            <span><span className="pair">USD/SGD</span> 1.3445 <span className="up">+0.02%</span></span>
            <span className="sep">·</span>
            <span><span className="pair">USD/HKD</span> 7.7820 <span className="dn">-0.01%</span></span>
            <span className="sep">·</span>
            <span><span className="pair">USD/INR</span> 83.31 <span className="up">+0.07%</span></span>
            <span className="sep">·</span>
            <span><span className="pair">EUR/USD</span> 1.0842 <span className="up">+0.12%</span></span>
            <span className="sep">·</span>
            <span><span className="pair">GBP/USD</span> 1.2651 <span className="up">+0.08%</span></span>
            <span className="sep">·</span>
            <span><span className="pair">USD/JPY</span> 154.22 <span className="dn">-0.24%</span></span>
            <span className="sep">·</span>
            <span><span className="pair">USD/CHF</span> 0.9123 <span className="up">+0.04%</span></span>
            <span className="sep">·</span>
            <span><span className="pair">USD/CAD</span> 1.3712 <span className="dn">-0.11%</span></span>
            <span className="sep">·</span>
            <span><span className="pair">AUD/USD</span> 0.6584 <span className="up">+0.19%</span></span>
            <span className="sep">·</span>
            <span><span className="pair">USD/SGD</span> 1.3445 <span className="up">+0.02%</span></span>
            <span className="sep">·</span>
            <span><span className="pair">USD/HKD</span> 7.7820 <span className="dn">-0.01%</span></span>
            <span className="sep">·</span>
            <span><span className="pair">USD/INR</span> 83.31 <span className="up">+0.07%</span></span>
          </div>
        </div>
        <div className="top-bar-right">
          <span><span className="dot">●</span> All systems operational</span>
          <span>14ms · NYC</span>
        </div>
      </div>
    </div>
  );
}
