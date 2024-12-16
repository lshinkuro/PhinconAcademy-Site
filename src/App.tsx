import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Alumni from './components/Alumni';
import Partners from './components/Partners';
import About from './components/About';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Programs />
      <Alumni />
      <Partners />
      <About />
    </div>
  );
}

export default App;