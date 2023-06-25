import React from 'react';
import Hero from './Components/Hero';
import Partners from './Components/Partners';

const Home = () => {
  return (
    <div className="bg-primary">
      <div className="mx-auto container">
        <Hero />
      </div>
      <div className="main bg-secondary ">
        <div className="mx-auto container">
          <Partners />
        </div>
      </div>
    </div>
  );
};

export default Home;
