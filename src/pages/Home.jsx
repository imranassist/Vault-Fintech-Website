import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TrustStrip from '../components/TrustStrip';
import ProductDashboard from '../components/ProductDashboard';
import Capabilities from '../components/Capabilities';
import StatsSection from '../components/StatsSection';
import AudienceSection from '../components/AudienceSection';
import ApiSection from '../components/ApiSection';
import PricingSection from '../components/PricingSection';
import FaqSection from '../components/FaqSection';
import PromiseSection from '../components/PromiseSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <div className="grid-bg"></div>
      <TopBar />
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <ProductDashboard />
      <Capabilities />
      <StatsSection />
      <AudienceSection />
      <ApiSection />
      <PricingSection />
      <FaqSection />
      <PromiseSection />
      <Footer />
    </>
  );
}
