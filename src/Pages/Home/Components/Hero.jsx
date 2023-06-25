import React from 'react';
import heroImage from '../../../assets/hero.png';

const Hero = () => {
  return (
    <div className="lg:h-[880px] md:h-[800px] mx-auto container relative">
      <div className="flex justify-between flex-col-reverse md:flex-row lg:flex-row  items-center  ">
        <div className="mx-5 lg:max-w-[50%] h-full">
          <div className="lg:max-w-[513px] my-10 ">
            <p className="uppercase text-secondary text-base leading-8 tracking-widest">
              {' '}
              Modern Studio
            </p>
            <h1 className=" max-[540px]:text-4xl text-7xl font-bold my-8">
              We’re Help To Build Your Dream Project
            </h1>
            <p className="leading-8 mb-10">
              Agency provides a full service range including technical skills,
              design, business understanding.
            </p>
            <div className="flex justify-between max-w-sm leading-8 mb-10 ">
              <button className="btn bg-[#EF6D58] uppercase">
                How We Work
              </button>
              <button className="btn btn-ghost"> Contact</button>
            </div>
          </div>
        </div>
        <div className="lg:max-w-[50%]">
          <img
            className="w-fit"
            src={heroImage}
            alt="a laughing Girl in red t-shirt and a Laptop"
          />
        </div>
      </div>
      <div className=" flex borde lg:absolute lg:bottom-2  md:absolute md:bottom-2 ">
        <div className="avatar">
          <div className="w-12 mx-2 ">
            <img
              className="rounded-full"
              src="https://i.ibb.co/cgLWtgM/Screenshot-74.png"
              alt="Screenshot-74"
            />
          </div>
        </div>
        <div className="ml-3">
          <p>"Put themselves in the merchant's shoes"</p>
          <sub>Meta Inc.</sub>
        </div>
      </div>
    </div>
  );
};

export default Hero;
