import React from 'react';
import heroImage from '../../../assets/hero.png';

const Hero = () => {
  return (
    <div className=" flex justify-between lg:py-[100px] flex-wrap flex-col-reverse md:flex-row lg:flex-row ">
      <div className="mx-5 relative">
        <div className="lg:max-w-[513px] my-10">
          <p className="uppercase text-[#EF6D58] text-base"> Modern Studio</p>
          <h1 className=" max-[540px]:text-4xl text-5xl font-bold my-8">
            We’re Help To Build Your Dream Project
          </h1>
          <p>
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>
          <div className="flex justify-between max-w-sm my-10">
            <button className="btn bg-[#EF6D58] uppercase">How We Work</button>
            <button className="btn btn-ghost"> Contact</button>
          </div>
        </div>
        <div className=" flex">
          <div className="avatar">
            <div className="w-12 rounded-xl ">
              <img
                src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Auhor Img"
              />
            </div>
          </div>
          <div className="mx-5">
            <p>"Pu t themselves in the merchant's shoes"</p>
            <sub>Meta Inc.</sub>
          </div>
        </div>
      </div>
      <div className="lg:max-w-[50%] mx-5">
        <img
          className="w-fit"
          src={heroImage}
          alt="a laughing Girl in red t-shirt and a Laptop"
        />
      </div>
    </div>
  );
};

export default Hero;
