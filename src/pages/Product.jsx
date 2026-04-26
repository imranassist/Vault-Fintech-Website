import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

export default function Product() {
  return (
    <>
      <div className="grid-bg"></div>
      <TopBar />
      <Navbar />
      <section style={{ padding: '140px 32px', minHeight: '60vh' }}>
        <div className="section-head">
          <Reveal className="section-eyebrow"><span className="index">[ N°002 / PRODUCT ]</span> · <strong>Deep dive.</strong></Reveal>
          <Reveal as="h2" className="section-title">The complete <span className="accent">platform</span>.</Reveal>
        </div>
        <Reveal>
          <p style={{ fontSize: '18px', color: 'var(--mute-2)', maxWidth: '600px', lineHeight: 1.6 }}>
            Vault provides everything you need to manage your company's finances in one place. Explore our tools for treasury management, corporate cards, international wires, and automated accounting.
          </p>
        </Reveal>
      </section>
      <Footer />
    </>
  );
}
