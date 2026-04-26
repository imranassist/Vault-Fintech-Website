import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--paper)', color: 'var(--ink)' }}>
      <header style={{ padding: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" className="logo">
          <span className="logo-mark">V</span>
          Vault
        </Link>
        <Link to="/signin" style={{ color: 'var(--mute-2)', fontSize: '13px', textDecoration: 'none', fontWeight: 500 }}>Already have an account? <span style={{ color: 'var(--ink)' }}>Sign in</span></Link>
      </header>
      
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px' }}>
        <div style={{ width: '100%', maxWidth: '440px' }}>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: '48px', fontStyle: 'italic', fontWeight: 400, marginBottom: '8px', letterSpacing: '-0.02em', lineHeight: 1 }}>Open account</h1>
          <p style={{ color: 'var(--mute-2)', fontSize: '15px', marginBottom: '40px' }}>Join 12,000+ serious operators scaling with Vault.</p>
          
          <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--mute-2)', marginBottom: '8px', letterSpacing: '0.02em' }}>FIRST NAME</label>
                <input type="text" placeholder="Jane" style={{ width: '100%', background: 'transparent', border: '1px solid var(--line-2)', padding: '14px 16px', borderRadius: '8px', color: 'var(--ink)', fontSize: '14px', outline: 'none' }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--mute-2)', marginBottom: '8px', letterSpacing: '0.02em' }}>LAST NAME</label>
                <input type="text" placeholder="Doe" style={{ width: '100%', background: 'transparent', border: '1px solid var(--line-2)', padding: '14px 16px', borderRadius: '8px', color: 'var(--ink)', fontSize: '14px', outline: 'none' }} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--mute-2)', marginBottom: '8px', letterSpacing: '0.02em' }}>WORK EMAIL</label>
              <input type="email" placeholder="jane@company.com" style={{ width: '100%', background: 'transparent', border: '1px solid var(--line-2)', padding: '14px 16px', borderRadius: '8px', color: 'var(--ink)', fontSize: '14px', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--mute-2)', marginBottom: '8px', letterSpacing: '0.02em' }}>COMPANY NAME</label>
              <input type="text" placeholder="Acme Corp" style={{ width: '100%', background: 'transparent', border: '1px solid var(--line-2)', padding: '14px 16px', borderRadius: '8px', color: 'var(--ink)', fontSize: '14px', outline: 'none' }} />
            </div>
            
            <button className="btn btn-ink" style={{ width: '100%', justifyContent: 'center', marginTop: '16px', padding: '16px', fontSize: '15px' }}>
              Continue <span className="arrow">→</span>
            </button>
          </form>
          
          <div style={{ marginTop: '32px', textAlign: 'center', fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--mute)' }}>
            By continuing, you agree to Vault's <Link to="#" style={{ color: 'var(--ink)' }}>Terms of Service</Link>.
          </div>
        </div>
      </main>
    </div>
  );
}
