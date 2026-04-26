import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

export default function Changelog() {
  return (
    <>
      <div className="grid-bg"></div>
      <TopBar />
      <Navbar />
      <section style={{ padding: '140px 32px', minHeight: '60vh' }}>
        <div className="section-head">
          <Reveal className="section-eyebrow"><span className="index">[ N°003 / CHANGELOG ]</span> · <strong>What's new.</strong></Reveal>
          <Reveal as="h2" className="section-title">Continuous <span className="accent">improvements</span>.</Reveal>
        </div>
        <Reveal>
          <div style={{ maxWidth: '600px', borderLeft: '1px solid var(--line-dark)', paddingLeft: '24px' }}>
            <div style={{ marginBottom: '40px' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--lime)', marginBottom: '8px' }}>APRIL 24, 2026</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '24px', fontStyle: 'italic', marginBottom: '12px' }}>Multi-entity consolidation</h3>
              <p style={{ color: 'var(--mute-2)', lineHeight: 1.6 }}>You can now view balances and transactions across all your global entities in a single, unified ledger view. Perfect for holding companies and global teams.</p>
            </div>
            <div style={{ marginBottom: '40px' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--mute)', marginBottom: '8px' }}>APRIL 12, 2026</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '24px', fontStyle: 'italic', marginBottom: '12px' }}>Expanded JPY support</h3>
              <p style={{ color: 'var(--mute-2)', lineHeight: 1.6 }}>We've added native Japanese Yen local rails, allowing for faster and cheaper transfers to and from APAC accounts.</p>
            </div>
          </div>
        </Reveal>
      </section>
      <Footer />
    </>
  );
}
