import React from 'react';
import partners1 from '../../../assets/partners1.png';
import partners2 from '../../../assets/partners2.png';
import partners3 from '../../../assets/partners3.png';
import partners4 from '../../../assets/partners4.png';
import partners5 from '../../../assets/partners5.png';

const Partners = () => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3  sm:grid-cols-3 grid-cols-3 gap-2  mx-5 border  border-5 border-red-50 h-24 items-center">
      <img src={partners1} alt={partners1} />
      <img src={partners2} alt={partners2} />
      <img src={partners3} alt={partners3} />
      <img src={partners4} alt={partners4} />
      <img src={partners5} alt={partners5} />
    </div>
  );
};

export default Partners;
