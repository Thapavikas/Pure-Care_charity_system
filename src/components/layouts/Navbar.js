import React from 'react';
import { Link } from 'react-router-dom';
import '../layouts/Navbar.css';
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <header>
      <div class='navbar '>
        <nav>
          <div className='nav-wrapper'>
            <Link to='/' className='brand-logo hide-on-small-only' style={{paddingLeft:'10px',fontSize:'30px'}}>
              Pure Care
            </Link>
            <Link
              to='/'
              className='brand-logo show-on-small hide-on-med-and-up'
             >
              Pure Care
            </Link>

            <Link to='/' data-target='mobile-demo' className='sidenav-trigger'>
              <MdMenu/>
            </Link>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <Link className='Design' to='/About' onClick={() => window.scrollTo(0, 0)}>About</Link>
              </li>
              <li>
                <Link className='Design' to='/message' onClick={() => window.scrollTo(0, 0)}>Message</Link>
              </li>
              <li>
                <Link className='Design' to='/education' onClick={() => window.scrollTo(0, 0)}>Education</Link>
              </li>
              <li>
                <Link className='Design' to='/foodbank' onClick={() => window.scrollTo(0, 0)}>Food Donate</Link>
              </li>
              <li>
                <Link className='Design' to='/socialwelfare' onClick={() => window.scrollTo(0, 0)}>Social Welfare</Link>
              </li>
              <li>
                <Link className='Design' to='/volunteer' onClick={() => window.scrollTo(0, 0)}>Volunteers</Link>
              </li>
              <li>
                <Link className='Design' to='/contact' onClick={() => window.scrollTo(0, 0)}>Contact</Link>
              </li>
              <li>
                <Link className='Design1' to='/Login' onClick={() => window.scrollTo(0, 0)}>Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className='sidenav '  id='mobile-demo'>
        <li>
          <Link className='Design' to='/About' onClick={() => window.scrollTo(0, 0)}>About</Link>
        </li>
        <li>
          <Link className='Design' to='/message' onClick={() => window.scrollTo(0, 0)}>Message</Link>
        </li>
        <li>
          <Link className='Design' to='/education' onClick={() => window.scrollTo(0, 0)}>Education</Link>
        </li>
        <li>
          <Link className='Design' to='/foodbank' onClick={() => window.scrollTo(0, 0)}>Food Donate</Link>
        </li>
        <li>
          <Link className='Design' to='/socialwelfare' onClick={() => window.scrollTo(0, 0)}>Social Welfare</Link>
        </li>
        <li>
          <Link className='Design' to='/volunteer' onClick={() => window.scrollTo(0, 0)}>Volunteers</Link>
        </li>
        <li>
          <Link className='Design' to='/contact' onClick={() => window.scrollTo(0, 0)}>Contact</Link>
        </li>
        <li>
          <Link className='Design' to='/Login' onClick={() => window.scrollTo(0, 0)}>Login</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
