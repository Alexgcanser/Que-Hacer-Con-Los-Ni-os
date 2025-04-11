import React from 'react';
import Encabezado from './components/Encabezado';
import About from './components/About';
import Actividades from './components/Actividades';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div>
      <Encabezado />
      <main>
        <About />
        <Actividades />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;


