import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">
        <span className="logo-mark">V</span>
        Vault
      </Link>
      <ul className="nav-links">
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/#caps">Capabilities</Link></li>
        <li><Link to="/developers">Developers <span className="badge">API</span></Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/changelog">Changelog <span className="badge">12 NEW</span></Link></li>
        <li><Link to="/customers">Customers</Link></li>
      </ul>
      <div className="nav-right">
        <Link to="/signin" className="btn btn-ghost">Sign in</Link>
        <Link to="/signup" className="btn btn-ink">Open account <span className="arrow">↗</span></Link>
      </div>
    </nav>
  );
}
