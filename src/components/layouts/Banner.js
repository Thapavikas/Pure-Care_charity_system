import React from 'react';
import backgroundImg from '../../img/banner/backgroundImg.jpg';
import backgroundImg2 from '../../img/banner/backgroundImg2.jpg';
import backgroundImg3 from '../../img/banner/backgroundImg3.jpg';
import '../layouts/Banner.css'

const Banner = () => {
  return (
    <div className='slider'>
        <ul className='slides'>
          <li>
            <img src={backgroundImg} alt='' style={{ opacity: '1' }} />
            <div className='caption center-align'>
              <h1 className='black-text'>The Charity Foundation</h1>
              <h3 className='black-text '>A good cause </h3>
            </div>
          </li>
          <li>
            <img src={backgroundImg2} alt='' style={{ opacity: '0.5' }} />
            <div className='caption left-align'>
              <h1 className='black-text '>The Charity Foundation</h1>
              <h3 className='black-text '>A good cause </h3>
            </div>
          </li>
          <li>
            <img src={backgroundImg3} alt='' style={{ opacity: '0.5' }} />
            <div className='caption right-align'>
              <h1 className='black-text '>The Charity Foundation</h1>
              <h3 className='black-text '>A good cause</h3>
            </div>
          </li>
        </ul>
      <br />
    </div>
  );
};

export default Banner;
