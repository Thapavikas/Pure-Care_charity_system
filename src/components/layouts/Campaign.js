import React from 'react';
import { Link, useNavigat } from 'react-router-dom';
const Campaign = () => {
  return (
    <div className='container green center white-text'>
      <div className='container'>
        <h1>Campaign</h1>
        <h3>Uttrakhand Winter Aid</h3>
        <p>
          Uttrakhand is facing its coldest winter in 30 years! Charity Foundation will be
          providing warm sweaters, shawls, and blankets to those in need. Let's
          help keep the needy people of Lahore warm!
        </p>
        <Link
          className='waves-effect waves-light pulse black btn-large modal-trigger hide-on-small-only'
          to='/CampaignModal'
        >
        Contribute
        </Link>
        <Link
          className='waves-effect waves-light pulse black btn-small modal-trigger hide-on-med-and-up'
          to='/CampaignModal'
        >
          Contribute
        </Link>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Campaign;
