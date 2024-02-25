import React from 'react';
import aboutImg from '../../img/aboutimage/aboutImg.jpg';
import aboutImg1 from '../../img/aboutimage/aboutImg1.jpg';
import '../../components/pages/About.css';

const About = () => {
  return (
    <main>
      <div className='Apage'>
        <p class="Aboutpage"> <b>About Us</b></p>
        <p class="Aboutcontent">Welcome to Charity Foundation, a dedicated force committed to making a positive impact on the lives of target beneficiaries or 
          the community you serve. Established in 2020, we are driven by a profound belief in the power of compassion 
          and collective action to bring about meaningful change.</p>
              <div class="responsive-container-block bigContainer">
          <div class="responsive-container-block Container">
            <img src={aboutImg} alt='' className='mainImg'/>
          <div class="allText aboveText">
            <p class="text-blk headingText">
              Our Mission
            </p>
            <p class="text-blk subHeadingText">
            At Charity Foundation , our mission is to remove poverty from the society and help the people in need. 
            </p>
            <p class="text-blk description">
            Whether it's addressing specific issues or challenges or championing core values such as compassion, equality, sustainability, we are unwavering in our commitment to making a difference.
            </p>
            <button class="explore">
              Explore
            </button>
          </div>
        </div>
        <div class="responsive-container-block Container bottomContainer">
          <img src={aboutImg1} alt='' className='mainImg'/>
          <div class="allText bottomText">
              <p class="text-blk headingText">
                Our Vision
              </p>
              <p class="text-blk subHeadingText">
              Our efforts are directed towards By understanding and empathizing with their unique needs, we tailor our initiatives to create sustainable solutions that empower and uplift.
              </p>
              <p class="text-blk description">
              Guided by a set of core values, we operate with [integrity, transparency, inclusivity, etc.]. These values are not just words but principles that shape every aspect of our work, fostering an environment of trust, collaboration, and positive impact.
              </p>
              <button class="explore">
              Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
