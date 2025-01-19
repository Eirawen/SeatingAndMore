import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Sustainability from './components/Sustainability';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Sustainability />
      <Contact />
    </div>
  );
}

export default App;