import React from 'react';
import GlobalStyles from './Globalstyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Guarantee from './components/Guarantee';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <Guarantee />
        <Testimonials />
        <Benefits />
      </main>
      <Footer />
    </>
  );
}

export default App;