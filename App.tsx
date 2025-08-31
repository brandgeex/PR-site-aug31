
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';
import Home from './pages/Home';
import About from './pages/About';
import MasterPlan from './pages/MasterPlan';
import Villas from './pages/Villas';
import Gallery from './pages/Gallery';
import Community from './pages/Community';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-brand-light font-sans text-brand-dark min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/master-plan" element={<MasterPlan />} />
            <Route path="/villas" element={<Villas />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AiAssistant />
      </div>
    </HashRouter>
  );
};

export default App;
