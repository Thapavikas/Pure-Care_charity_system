import React from 'react';
import '../pages/Education.css'
import Education1 from '../../img/Education/EducationImg1.jpg';
import  Education2 from '../../img/Education/EducationImg2.jpg';
import  Education3 from '../../img/Education/EducationImg3.jpg';
import { Link, useNavigat } from 'react-router-dom';

const Education = () => {
  return (
    <main>
      <main>
      <div class="logo">
        <p class='Elogo1'><b>Education</b></p>
        <section class="Ebanner">
        <Link to='/Education1'>Donate now</Link>
        </section>
        <div class="Econtent">
            <p style={{fontSize:'23px', textAlign:'justify'}}>
                "Empowering the minds of impoverished children through education is not just an investment in their future; it's a testament to the boundless potential that exists within every child, waiting to be awakened and nurtured."
            </p>
        </div>
        <div class="photo">
            <br/>
            <p class="Eheading">Our Works</p>
            <br/>
            <p style={{fontSize:'28px',textAlign:'center'}} >"Look what we can do together."</p>
          <br/>
              <div class="wrapper">
                <img class="box" src={Education1 } alt=''/>
                <img class="box" src={Education2} alt=''/>
                <img class="box" src={Education3} alt=''/>
              </div>
        </div>
        <div class="deli" style={{display: 'grid'}} >
          <p class="Eheading">DOOR PICKUP</p>
          <br/>
          <p  class="para" >"Your donate will be immediately collected and sent for Child Education "</p>
          <div class='gif1'>

          </div>
        </div>
      </div>
    </main>
    </main>
  );
};

export default Education;
