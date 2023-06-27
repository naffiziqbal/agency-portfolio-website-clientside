import React from 'react';

const WorkBreif = () => {
  return (
    <div className="text-primary flex flex-nowrap flex-col md:flex-row lg:flex-row justify-start gap-5 py-12 border-b-2 border-[#F3D1BF]">
      <div className="lg:max-w-[50%] ">
        <h5 className="text-secondary   leading-8 tracking-wide py-4 uppercase">
          How We Work
        </h5>
        <h3 className="text-[40px] font-extrabold leading-[48px] py-5">
          Making Your Projects <br /> Look Awesome
        </h3>
        <p className="text-base leading-8 w-3/4">
          Technical skills, design, business understanding, ability to put
          themselves in the merchant's shoes.
        </p>
        <p className="leading-8 py-5">Read more </p>
      </div>

      <div className="lg:max-w-[50%] lg:w-2/4 pt-12">
        <div className="flex flex-nowrap flex-row gap-12 items-center">
          <h1 className="text-7xl font-extrabold leading-[80px]">1</h1>{' '}
          <h4 className="text-2xl font-bold leading-8">
            Full service range Including
          </h4>
        </div>
        <div className="flex flex-nowrap flex-row justify-items-start items-center gap-12">
          <h1 className="text-7xl font-extrabold leading-[80px]">2</h1>
          <h4 className="text-2xl font-bold leading-8">
            Technical skills, design, business
          </h4>
        </div>
        <div className="flex flex-nowrap flex-row justify-items-start items-center gap-12">
          <h1 className="text-7xl font-extrabold leading-[80px]">3</h1>
          <h4 className="text-2xl font-bold leading-8">
            Themselves in the merchant's
          </h4>
        </div>
      </div>
    </div>
  );
};

export default WorkBreif;
