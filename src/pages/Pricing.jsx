import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PricingSection from '../components/PricingSection';

export default function Pricing() {
  return (
    <>
      <div className="grid-bg"></div>
      <TopBar />
      <Navbar />
      <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <PricingSection />
      </div>
      <Footer />
    </>
  );
}
