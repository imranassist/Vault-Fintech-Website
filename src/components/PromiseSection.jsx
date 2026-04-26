import { Link } from 'react-router-dom';

export default function PromiseSection() {
  return (
    <section className="promise">
      <div className="promise-eyebrow"><strong>[ § 08 / Closing ]</strong> · For the people who treat their books like inventory, not paperwork.</div>
      <h2 className="promise-title">
        Banking should feel <em>like</em> <span className="accent">software</span>. Not like <em>compliance</em>.
      </h2>
      <div className="promise-actions">
        <Link to="/signup" className="btn btn-lime">Open an account · 20 minutes <span className="arrow">↗</span></Link>
        <Link to="#" className="btn btn-ghost">Read the founder's letter</Link>
      </div>
    </section>
  );
}
