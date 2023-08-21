import React, { useEffect, useState } from "react";
import "./NavStyles.css";

const Nav = () => {
  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <div className={`nav content ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img className="nav__logo" src="/images/logo.svg" alt="Netflix Logo" />
        <img
          className="nav__avatar"
          src="/images/avatar.png"
          alt="Profile Avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
