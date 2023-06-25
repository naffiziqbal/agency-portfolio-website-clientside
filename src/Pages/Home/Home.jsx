import React from 'react';
import Hero from './Components/Hero';
import Partners from './Components/Partners';
import About from './Components/About';

const Home = () => {
  return (
    <div className="bg-[#28293E]">
      <div className="mx-auto container">
        <Hero />
      </div>
      <div className="main bg-[#FDF0E9] ">
        <div className="mx-auto container">
          <Partners />
          <About />
        </div>
      </div>
    </div>
  );
};

export default Home;
