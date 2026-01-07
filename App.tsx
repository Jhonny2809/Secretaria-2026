
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Bonuses from './components/Bonuses';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Pricing from './components/Pricing';
import UrgencyFooter from './components/UrgencyFooter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Bonuses />
        <Testimonials />
        <CallToAction />
        <Pricing />
      </main>
      <UrgencyFooter />
    </div>
  );
};

export default App;
