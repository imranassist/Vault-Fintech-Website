import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <span className="logo-mark">V</span>
            Vault
          </Link>
          <p>Banking infrastructure for serious operators. Made in NYC and Singapore. Backed by Sequoia, Ribbit, and 142 founders we couldn't have built without.</p>
          <span className="footer-status"><span className="dot"></span><strong>All systems operational</strong> · 14ms</span>
        </div>
        <div className="footer-col">
          <h5>[ PRODUCT ]</h5>
          <ul>
            <li><Link to="/product">Treasury</Link></li>
            <li><Link to="/product">Cards</Link></li>
            <li><Link to="/product">Wires & FX</Link></li>
            <li><Link to="/developers">API</Link></li>
            <li><Link to="/changelog">Changelog</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>[ COMPANY ]</h5>
          <ul>
            <li><Link to="#">About</Link></li>
            <li><Link to="/customers">Customers</Link></li>
            <li><Link to="#">Manifesto</Link></li>
            <li><Link to="#">Careers · 12</Link></li>
            <li><Link to="#">Press kit</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>[ DEVELOPERS ]</h5>
          <ul>
            <li><Link to="/developers">Documentation</Link></li>
            <li><Link to="/developers">API reference</Link></li>
            <li><Link to="#">Status · 99.99%</Link></li>
            <li><Link to="#">SDKs · Github</Link></li>
            <li><Link to="/changelog">Changelog</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>[ LEGAL ]</h5>
          <ul>
            <li><Link to="#">Security · SOC 2</Link></li>
            <li><Link to="#">Privacy</Link></li>
            <li><Link to="#">Terms</Link></li>
            <li><Link to="#">Disclosures</Link></li>
            <li><Link to="#">FDIC partners</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-mega">Vault.</div>

      <div className="footer-bottom">
        <span>© 2026 Vault Financial Inc. · Member FDIC through partner banks · Vault is not a bank.</span>
        <div className="legal">
          <Link to="#">Privacy</Link>
          <Link to="#">Terms</Link>
          <Link to="#">Cookies</Link>
          <Link to="#">Disclosures</Link>
        </div>
      </div>
    </footer>
  );
}
