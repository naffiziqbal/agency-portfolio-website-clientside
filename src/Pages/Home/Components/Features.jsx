import React from 'react';
import features from '../../../assets/features.png';
import check from '../../../assets/check.svg';
const Features = () => {
  return (
    <div className="flex flex-nowrap flex-col md:flex-row lg:flex-row text-primary gap-24">
      <div>
        <h5 className="uppercase leading-8 tracking-wider text-secondary">
          features
        </h5>
        <h2 className="text-[56px] font-extrabold leading-[64px] tracking-tight py-5">
          Give Your Site A New Look
        </h2>
        <p className="text-sm leading-8 ">
          Service range including technical skills, design, business
          understanding.
        </p>
        <div>
          <div className="flex flex-nowrap my-5 items-center">
            <img src={check} alt="" className="w-8 h-8" />
            <p className="leading-8 mx-5">Range including technical skills</p>
          </div>
          <div className="flex flex-nowrap my-5 items-center">
            <img src={check} alt="" className="w-8 h-8" />
            <p className="leading-8 mx-5">Range including technical skills</p>
          </div>
          <div className="flex flex-nowrap my-5 items-center">
            <img src={check} alt="" className="w-8 h-8" />
            <p className="leading-8 mx-5">Range including technical skills</p>
          </div>
        </div>
      </div>
      <div className="lg:max-w-[50%]">
        <img src={features} alt="features image" className="w-fit" />
      </div>
    </div>
  );
};

export default Features;
