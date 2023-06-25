import React from 'react';
import aboutImg from '../../../assets/About.png';

const About = () => {
  return (
    <div className="flex flex-wrap flex-col md:flex-row  lg:flex-row justify-between items-center ">
      <div className="lg:w-[50%]">
        <img src={aboutImg} alt="about Image" className="w-fit" />
      </div>
      <div className="  lg:w-[50%]">
        <h5 className="text-secondary leading-8 tracking-widest uppercase text-sm">
          about
        </h5>
        <h2 className="text-[56px] md:text-[56px] sm:text-[40px] text-[#391400] font-extrabold leading-[64px] tracking-tighter my-8">
          An Experience <br /> Design Agency
        </h2>
        <p className="text-primary text-xl">Provides a full service range</p>
        <p className="w-[470px] text-primary leading-8 my-8 ">
          Ability to put themselves in the merchant's shoes. It is meant to
          partner on the long run, and work as an extension of the merchant's
          team.
        </p>
        <button className=" bg-white text-primary uppercase w-[138px] h-[48px] rounded-lg shadow-lg font-semibold hover:bg-primary hover:text-white duration-300 mb-8">
          About US
        </button>
      </div>
    </div>
  );
};

export default About;
