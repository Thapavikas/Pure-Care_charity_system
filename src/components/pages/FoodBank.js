import React from 'react';
import '../pages/FoodBank.css'
import FoodBank0 from '../../img/FoodDonate/p1.jpeg';
import FoodBank1 from '../../img/FoodDonate/p2.jpeg';
import FoodBank2 from '../../img/FoodDonate/p3.jpeg';
import FoodBank3 from '../../img/FoodDonate/delivery.gif';
import { Link, useNavigat } from 'react-router-dom';


const FoodBank = () => {

  return (
    <main>
      <div class="logo">
        <p class='Flogo1'>Food <b>Donate</b></p>
        <section class="Fbanner">
        <Link to='/foodbank1'>Donate now</Link>
        </section>
        <div class="content">
            <p style={{fontSize:'23px', textAlign:'justify'}}>
                “Cutting food waste is a delicious way of saving money, helping to feed the world and protect the planet.” 
            </p>
        </div>
        <div class="photo">
            <br/>
            <p class="heading">Our Works</p>
            <br/>
            <p style={{fontSize:'28px',textAlign:'center'}} >"Look what we can do together."</p>
          <br/>
              <div class="wrapper">
                <img class="box" src={FoodBank0} alt=''/>
                <img class="box" src={FoodBank1} alt=''/>
                <img class="box" src={FoodBank2} alt=''/>
              </div>
        </div>
        <div class="deli" >
          <p class="heading">DOOR PICKUP</p>
          <br/>
          <p  class="para" >"Your donate will be immediately collected and sent to needy people "</p>
          <div class='gif'>
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default FoodBank;
