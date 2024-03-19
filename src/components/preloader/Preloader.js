import React, { useEffect } from 'react';
import '../preloader/Preloader.css'
import { preLoaderAnim } from '../../animations/iindex';

const Preloader = () => {

    useEffect(() =>(
        preLoaderAnim()
    ),[]);
  return (
    <div className='preloader'>
        <div className='texts-container'>
            <span>Kindness</span>
            <span>Hope Highway</span>
            <span>Giving Garden</span>
        </div>
    </div>
  );
};

export default Preloader;