import React from 'react';
import { Link } from 'react-router-dom';
import '../layouts/Footer.css'
import LogoImg from '../../img/Navbar/Navbar1.png'

const Footer = () => {
  return (
    <footer>
      <div class='footer'>
        <div class='container'>
          <div className='row'>
            <div className='col l6 s12'>
              <img class='logo' src={LogoImg}/>
              <p className='grey-text text-lighten-4'></p>
            </div>
            <div className='col l4 offset-l2 s12'>
              <h5 className='white-text'>Goto</h5>
              <ul>
                <li>
                  <Link className='grey-text text-lighten-3' to='/about'>
                    About
                  </Link>
                </li>
                <li>
                  <Link className='grey-text text-lighten-3' to='/message'>
                    Message
                  </Link>
                </li>
                <li>
                  <Link className='grey-text text-lighten-3 large-text' to='/education'>
                    Education
                  </Link>
                </li>
                <li>
                  <Link
                    className='grey-text text-lighten-3 large-text'to='/foodbank'>
                    Food Bank
                  </Link>
                </li>
                <li>
                  <Link className='grey-text text-lighten-3' to='/socialwelfare'>
                    Social Welfare
                  </Link>
                </li>
                <li>
                  <Link className='grey-text text-lighten-3' to='/water'>
                    Water
                  </Link>
                </li>
                <li>
                  <Link
                    className='grey-text text-lighten-3'to='/volunteer'>
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link className='grey-text text-lighten-3' to='/Login'>
                    login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class='footer-copyright'>
          <div className='container'>
            <div className='row'>
              <div className='col s6'>
                <br />© 2024 The Pure Care Charity Foundation Inc. All rights reserved.
              </div>
              <div className='col s6'>
                <br />
                <br />
                <a
                  className='white-text right'>
                  Powered by Vikas B and Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
