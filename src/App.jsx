import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Developers from './pages/Developers';
import Customers from './pages/Customers';
import Changelog from './pages/Changelog';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ScrollProgress from './components/ScrollProgress';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
