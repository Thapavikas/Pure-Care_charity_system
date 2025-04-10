import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';

import Navbar from '../../Client/src/components/layouts/Navbar.jsx';
import Footer from '../../Client/src/components/layouts/Footer.jsx';

import Home from '../../Client/src/components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Message from '../../Client/src/components/pages/Message.jsx';
import Education from '../../Client/src/components/pages/Education.jsx';
import FoodBank from '../../Client/src/components/pages/FoodBank.jsx';
import FoodBank1 from '../../Client/src/components/pages/FoodBank1.jsx';
import Education1 from '../../Client/src/components/pages/Education1.jsx';
import SocialWelfare from '../../Client/src/components/pages/SocialWelfare.jsx';
import Gallery from '../../Client/src/components/pages/Gallery.jsx';
import ContactUs from './components/pages/Contactus.jsx';
import Login from '../../Client/src/Login/Login.jsx';
import Register from '../../Client/src/Register/Register.jsx';
import Volunteer  from '../../Client/src/components/pages/volunteer.jsx';
import Volunteer1 from '../../Client/src/components/pages/volunteer1.jsx';
import SocialWelfare1 from '../../Client/src/components/pages/SocialWelfare1.jsx';
import CampaignModal from '../../Client/src/components/layouts/CampaignModal.jsx';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Routes} from 'react-router-dom';
import Preloader from '../../Client/src/components/preloader/Preloader.jsx';



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
