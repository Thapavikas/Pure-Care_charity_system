import React from 'react';
import AidTrackerItem from './AidTrackerItem';
const AidTracker = () => {
  return (
    <div className='container center'>
      <h1>What We Did</h1>
      <br />
      <div className='row'>
        <AidTrackerItem F title='Wells Constructed' count='50' />
        <AidTrackerItem  title='Schools Created' count='70' />
        <AidTrackerItem title='Students Enrolled' count='500' />
        <AidTrackerItem  title='People Helped' count='1000' />
      </div>
      <div className='row'>
        <h6>Updated 10AM Today | Since Mar 2024</h6>
      </div>
    </div>
  );
};

export default AidTracker;
