import React, { useEffect, useState } from 'react';
import aboutImg from '../../../assets/About.png';

const About = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const counter1 = (min, max, duration) => {
    let current = min;
    let range = max - min;
    let increment = max > min ? 1 : -1;
    let step = Math.abs(Math.floor(duration / range));
    let timer = setInterval(() => {
      current += increment;
      setCount1(current);
      if (current == max) {
        clearInterval(timer);
      }
    }, step);
  };
  const counter2 = (min, max, duration) => {
    let current = min;
    let range = max - min;
    let increment = max >= min ? 1 : -1;
    let step = Math.abs(Math.floor(duration / range));
    let timer = setInterval(() => {
      current += increment;
      setCount2(current);
      if (current == max) {
        clearInterval(timer);
      }
    }, step);
  };
  const counter3 = (start, end, duration) => {
    let current = start;
    let range = end - current;
    let increment = end > start ? 1 : -1;
    let step = Math.abs(Math.floor(range / duration));
    let timer = setInterval(() => {
      current = current + increment;
      setCount3(current);
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
  };
  useEffect(() => {
    counter1(1, 43, 5000);
    counter2(1, 73, 5000);
    counter3(4000, 5000, 3000);
  }, []);
  return (
    <>
      <div className="flex flex-wrap flex-col md:flex-row  lg:flex-row justify-between items-center my-12 ">
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
      {/* Stats Starts Here */}
      <div className="agency-stats grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 text-primary items-center justify-center py-12">
        <div className="flex border border-[#F3D1BF]   justify-center flex-col items-center p-5">
          <h3 className="text-4xl font-extrabold" id="count1">
            {count1}+
          </h3>
          <p className="text-sm">Years of rxperience</p>
        </div>
        <div className="flex border border-[#F3D1BF] justify-center flex-col items-center p-5">
          <h3 className="text-4xl font-extrabold counter1">{count2}</h3>
          <p className="text-sm">Agency members</p>
        </div>
        <div className="flex border border-[#F3D1BF]  justify-center flex-col items-center p-5">
          <h3 className="text-4xl font-extrabold">{count3}+</h3>
          <p className="text-sm">Projects Completed</p>
        </div>
      </div>
    </>
  );
};

export default About;
