import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--ink)', color: 'var(--paper)' }}>
      <header style={{ padding: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" className="logo" style={{ color: 'var(--paper)' }}>
          <span className="logo-mark" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>V</span>
          Vault
        </Link>
        <Link to="/signup" style={{ color: 'var(--mute)', fontSize: '13px', textDecoration: 'none' }}>Need an account? <span style={{ color: 'var(--lime)' }}>Sign up</span></Link>
      </header>
      
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px' }}>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: '40px', fontWeight: 400, marginBottom: '8px', letterSpacing: '-0.02em' }}>Welcome back</h1>
          <p style={{ color: 'var(--mute)', fontSize: '14px', marginBottom: '32px' }}>Sign in to your Vault account to continue.</p>
          
          <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--mute)', marginBottom: '8px', letterSpacing: '0.02em' }}>EMAIL</label>
              <input type="email" placeholder="founders@acme.com" style={{ width: '100%', background: 'var(--ink-2)', border: '1px solid var(--line-dark)', padding: '14px 16px', borderRadius: '8px', color: 'var(--paper)', fontSize: '14px', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--mute)', marginBottom: '8px', letterSpacing: '0.02em' }}>
                PASSWORD
                <Link to="#" style={{ color: 'var(--lime)', textDecoration: 'none' }}>Forgot?</Link>
              </label>
              <input type="password" placeholder="••••••••" style={{ width: '100%', background: 'var(--ink-2)', border: '1px solid var(--line-dark)', padding: '14px 16px', borderRadius: '8px', color: 'var(--paper)', fontSize: '14px', outline: 'none' }} />
            </div>
            
            <button className="btn btn-lime" style={{ width: '100%', justifyContent: 'center', marginTop: '12px', padding: '14px' }}>
              Sign in to Vault
            </button>
          </form>
          
          <div style={{ marginTop: '32px', textAlign: 'center', fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--mute)' }}>
            Protected by reCAPTCHA and subject to the Vault <Link to="#" style={{ color: 'var(--paper)' }}>Privacy Policy</Link> and <Link to="#" style={{ color: 'var(--paper)' }}>Terms of Service</Link>.
          </div>
        </div>
      </main>
    </div>
  );
}
