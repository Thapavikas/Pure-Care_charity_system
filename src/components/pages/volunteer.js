import React from 'react';
import '../pages/volunteer.css'
import volunteer0 from '../../img/volunteer/volunteer0.jpg';
import volunteer1 from '../../img/volunteer/volunteer1.jpg';
import volunteer2 from '../../img/volunteer/volunteer2.jpg';
import { Link, useNavigat } from 'react-router-dom';


const volunteer = () => {
    return(
        <main>
            <div class='Vpage'>
                <p class='vlogo1'>Intrested <b>Volunteers</b></p>
                <section class="vbanner">
                <Link to='/volunteer1'>Join Now</Link>
                </section>
                <div class="vcontent">
                    <p style={{fontSize:'23px', textAlign:'justify'}}>
                        "Join our charity foundation as a volunteer and be the catalyst for positive change, contributing your time and skills to make a meaningful impact in the lives of those in need."
                    </p>
                </div>
                <div class="vphoto">
                    <br/>
                    <p class="vheading">Our Volunteers</p>
                    <br/>
                    <p style={{fontSize:'28px',textAlign:'justify'}} >
                        "Our dedicated volunteers embody the heart of our charity foundation, selflessly giving their time and energy to create a brighter, more compassionate world for those facing challenges."</p>
                <br/>
                    <div class="wrapper">
                        <img class="box" src={volunteer0} alt=''/>
                        <img class="box" src={volunteer1} alt=''/>
                        <img class="box" src={volunteer2} alt=''/>
                    </div>
                </div>
                <br/>
                <p  class="para" style={{fontSize:'25px',textAlign:'justify',padding:'20px'}} >"Driven by passion and kindness, our volunteers are the backbone of our charity foundation, working tirelessly to uplift communities and inspire positive change."
                "In the spirit of generosity, our volunteers bring diverse talents and a shared commitment, forming a united force that empowers our charity foundation's mission to make a difference in the lives of the less fortunate."
                </p>
                <p class='para' style={{fontSize:'25px',textAlign:'justify',padding:'20px'}}>
                    "Each volunteer at our charity foundation is a beacon of hope, weaving together a tapestry of compassion, resilience, and dedication, enriching the lives of those we serve."
                    "With unwavering enthusiasm, our volunteers stand as ambassadors of goodwill, fostering a sense of community and leaving an indelible mark on the transformative journey of our charity foundation."
                    "In the collaborative spirit of service, our volunteers shine as beacons of kindness, embodying the ethos of our charity foundation and exemplifying the extraordinary impact that individuals can achieve together."
                </p>
                <p class='para' style={{fontSize:'25px',textAlign:'justify',padding:'20px'}}>
                    "Volunteering with our charity foundation means becoming part of a compassionate family, where each member contributes a unique thread of kindness, weaving a fabric of support for those in need."
                    "With a shared vision for a better world, our volunteers at the charity foundation contribute their time and talents, weaving a narrative of compassion that transcends boundaries and transforms lives."
                </p>
            </div>
        </main>
    );
};
export default volunteer;