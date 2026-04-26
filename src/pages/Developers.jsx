import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ApiSection from '../components/ApiSection';

export default function Developers() {
  return (
    <>
      <div className="grid-bg"></div>
      <TopBar />
      <Navbar />
      <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <ApiSection />
      </div>
      <Footer />
    </>
  );
}
