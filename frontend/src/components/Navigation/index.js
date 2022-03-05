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
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
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
          </div>
          <div className='nav-buttons'>
            <div className='nav-user'>
              <ul>
                {isLoaded && sessionLinks}
              </ul >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
