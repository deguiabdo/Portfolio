import React from 'react';
import About from './components/pages/About';
import Home from "./components/pages/Home";
import LatetsWork from "./components/pages/LatetsWork";
import Navbar from "./components/Navbar";
import Skills from "./components/pages/Skills";
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className=' overflow-x-auto'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <LatetsWork />
      <Footer />
    </div>
  );
};

export default App;
