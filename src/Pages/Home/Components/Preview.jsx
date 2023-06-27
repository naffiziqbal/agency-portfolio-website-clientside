import React from 'react';

const Preview = () => {
  return (
    <div className="text-primary flex flex-wrap flex-col md:flex-row lg:flex-row py-12">
      <div className="max-w-[50%]  w-1/2">
        <iframe
          width="660"
          height="315"
          src="https://www.youtube.com/embed/wnHW6o8WMas"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="max-w-[50%]">
        <h5 className="uppercase text-secondary font-base leaelding-8 tracking-wide">
          Video Reel
        </h5>
        <h3 className="text-[40px] w-[469px] h-[99px] font-extrabold leading-[48px]">
          Unlock The Greatest Value Possible
        </h3>
        <p className="text-base leading-8">
          Design, business understanding, ability to put themselves in the
          merchant's shoes meant to partner.
        </p>
      </div>
    </div>
  );
};

export default Preview;
