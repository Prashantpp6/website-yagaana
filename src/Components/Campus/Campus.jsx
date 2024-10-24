import React from 'react';
import './Campus.css';
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.png';
import white_arrow from '../../assets/white-arrow.png';

const Campus = () => {
  return (
    <div id="Campus" className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="Campus gallery image 1" />
        <img src={gallery_2} alt="Campus gallery image 2" />
        <img src={gallery_3} alt="Campus gallery image 3" />
        <img src={gallery_4} alt="Campus gallery image 4" />
      </div>
      <button className='btn dark-btn'>
        See more here <img src={white_arrow} alt="Arrow icon" />
      </button>
    </div>
  );
}

export default Campus;
