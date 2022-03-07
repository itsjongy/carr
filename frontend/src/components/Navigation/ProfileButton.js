import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <p className="profile-button" onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </p>
      {showMenu && (
        <ul className="profile-dropdown">
          <div className="profile-username">
            Hi, {user.username}!
          </div>
          <hr className="profile-linebreak1"></hr>
          <div className="profile-cs">
            <a className="profile-contactus" href="/about">About</a>
          </div>
          <div>
            {/* <button className="profile-logbutton" onClick={logout}>Log out</button> */}
            <a className="profile-logout" href='/' onClick={logout}>Log out</a>
          </div>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
