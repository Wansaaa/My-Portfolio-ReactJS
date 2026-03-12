import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Navbar from './components/Navbar';
import 'remixicon/fonts/remixicon.css';
import Footer from './components/Footer';

// Screen Loading Lottie
import PreLaoder from './components/PreLoader.jsx';

// Animate Style
import 'animate.css';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreLaoder />
    <div className="container mx-auto px-4">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>,
);
