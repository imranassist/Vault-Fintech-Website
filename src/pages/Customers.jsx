import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AudienceSection from '../components/AudienceSection';

export default function Customers() {
  return (
    <>
      <div className="grid-bg"></div>
      <TopBar />
      <Navbar />
      <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <AudienceSection />
      </div>
      <Footer />
    </>
  );
}
