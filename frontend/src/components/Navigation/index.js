import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from './flickriologo.png'

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='profilebutton'>
        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
      <div className='nav-loginsign'>
        <div className='nav-signup'>
          <NavLink to="/signup" style={{ textDecoration: 'none', color: 'white' }}>Sign up</NavLink>
        </div>
        <div className='nav-login'>
          <NavLink to="/login" style={{ textDecoration: 'none', color: 'white' }}>Log in</NavLink>
        </div>
      </div>
    );
  }

  let sessionYou;
  if (sessionUser) {
    sessionYou = (
      <div>
        <a className='nav-explore' href='/explore'>Explore</a>
        <a className='nav-profile' href='/profile'>You</a>
      </div>
    );
  } else {
    sessionYou = (
      <></>
    );
  }

  return (
    <div className='nav-container'>
      <div className='navigation'>
        <div className='nav-content'>
          <div className='nav-logo'>
            <a href='/'>
              <img className='nav-logopic' src={logo} alt='' />
            </a>
            <div className='nav-exploreyou'>
              <div>
                {isLoaded && sessionYou}
              </div>
            </div>
          </div>
          <div className='nav-buttons'>
            {isLoaded && sessionLinks}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
