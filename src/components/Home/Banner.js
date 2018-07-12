import React from 'react';
import "../style.css"
import Logo from "./logo.png";

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <img src = {Logo} className ="logo-image" height="250" width="250"/>
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
        <p>A place for the VGStart Community to talk about and review video games</p>
      </div>
    </div>
  );
};

export default Banner;