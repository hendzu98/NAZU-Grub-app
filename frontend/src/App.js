import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CoreValues from './components/CoreValues';
import WhyChooseUs from './components/WhyChooseUs';
import Academy from './components/Academy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <CoreValues />
      <WhyChooseUs />
      <Academy />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
