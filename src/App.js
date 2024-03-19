import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer.js';

import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Message from './components/pages/Message.js';
import Education from './components/pages/Education';
import FoodBank from './components/pages/FoodBank.js';
import FoodBank1 from './components/pages/FoodBank1.js';
import Education1 from './components/pages/Education1.js';
import SocialWelfare from './components/pages/SocialWelfare';
import Gallery from './components/pages/Gallery.js';
import ContactUs from './components/pages/Contactus.js';
import Login from './Login/Login.jsx';
import Register from './Register/Register.js';
import Volunteer  from './components/pages/volunteer.js';
import Volunteer1 from './components/pages/volunteer1.js';
import SocialWelfare1 from './components/pages/SocialWelfare1.js';
import CampaignModal from './components/layouts/CampaignModal.js';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Routes} from 'react-router-dom';
import Preloader from './components/preloader/Preloader.js';



const App = () => {
  useEffect(() => {
    M.AutoInit();
  });


  return (
    <>
    <Preloader/>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/Education1' element={<Education1/>}/> 
            <Route path='/foodbank1' element={<FoodBank1/>}/>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/About' element={<About/>} />
            <Route exact path='/message' element={<Message/>} />
            <Route exact path='/education' element={<Education/>} />
            <Route exact path='/foodbank' element={<FoodBank/>} />
            <Route exact path='/socialwelfare' element={<SocialWelfare/>} />
            <Route exact path='/socialwelfare1' element={<SocialWelfare1/>} />
            <Route exact path='/gallery' element={<Gallery/>} />
            <Route exact path='/volunteer' element={<Volunteer/>} />
            <Route exact path='/volunteer1' element={<Volunteer1/>} />
            <Route exact path='/contact' element={<ContactUs/>} />
            <Route exact path='/CampaignModal' element={<CampaignModal/>} />
            <Route path='/Register' element={<Register/>}></Route>
            <Route path='/Login' element={<Login/>}/>
          </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
