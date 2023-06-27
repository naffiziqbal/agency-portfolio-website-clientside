import React from 'react';
import Hero from './Components/Hero';
import Partners from './Components/Partners';
import About from './Components/About';
import WorkBreif from './Components/WorkBreif';
import Preview from './Components/Preview';

const Home = () => {
  return (
    <div className="bg-[#28293E] font-MyFont  sm:border-red-700">
      <div className="mx-auto container">
        <Hero />
      </div>
      <div className="main bg-[#FDF0E9] px-5">
        <div className="mx-auto container">
          <Partners />
          <About />
          <WorkBreif />
          <Preview />
        </div>
      </div>
    </div>
  );
};

export default Home;
