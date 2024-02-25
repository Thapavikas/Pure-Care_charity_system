import React from 'react';
import CardBlockItem from './CardBlockItem.js';

import SocialWelfare from '../../img/whatwedo/socialWelfare.jpg';
import School from '../../img/whatwedo/school.jpg';
import Food from '../../img/whatwedo/food.jpg';
import Water from '../../img/whatwedo/water.jpg';
import volunteer from '../../img/whatwedo/volunteer.jpg';
import Events from '../../img/whatwedo/Events.jpg';

const CardBlock = () => {
  return (
    <div className='container'>
      <h1 className='center'>What We Do</h1>
      <br />
      <div className='row'>
        <CardBlockItem
          card='card medium orange lighten-2 hoverable'
          button='waves-effect waves-light orange lighten-1 btn-large'
          title='Education'
          image={School}
          html='/education'
          content='The Charity Foundation has partnered with State goverment (SSLC) to ensure children from poor backgrounds are receiving proper education in a safe environment. State board is a non-profit and non-commercial institution which focuses on educating children with less privileges in a competitive standard to make them excel in knowledge, character, and positive action.'
        />
        <CardBlockItem
          card='card medium purple lighten-2 hoverable'
          button='waves-effect waves-light purple lighten-1 btn-large'
          title='Food Bank'
          image={Food}
          html='/foodbank'
          content='Charity Foundation is committed to help those in need of food. Our goal is to provide food and supplies to less-fortunate families across the globe. We aim to collect and provide at least $50 a month to ensure the needs of poor families.'
        />
        <CardBlockItem
          card='card medium teal lighten-2 hoverable'
          button='waves-effect waves-light teal lighten-1 btn-large'
          title='Social Welfare'
          image={SocialWelfare}
          html='/socialwelfare'
          content='Our recent and ongoing projects include building wells and providing clean drinking water in poor communities across the globe. TIFC has initiated a water supply system, Sabeel-e-Rehmat (SER), to ensure that clean drinking water is being provided to poor communities around the world'
        />
      </div>
      <div className='row'>
        <CardBlockItem
          card='card medium blue lighten-2 hoverable'
          button='waves-effect waves-light blue lighten-1 btn-large'
          title='Gallery'
          image={Water}
          html='/gallery'
          content=''
        />

        <CardBlockItem
          card='card medium red  lighten-2 hoverable'
          button='waves-effect waves-light red lighten-1 btn-large'
          title='volunteer'
          image={volunteer}
          html='/volunteer'
        />

        <CardBlockItem
          card='card medium brown lighten-2 hoverable'
          button='waves-effect waves-light brown lighten-1 btn-large'
          title='Contact'
          image={Events}
          html='/contact'
        />
      </div>
    </div>
  );
};

export default CardBlock;
