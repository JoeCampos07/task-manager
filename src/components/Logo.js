import React from "react";
import FreeCodeCamp from '../images/freecodecamp-logo.png'
import '../stylesheets/logo.css'

function Logo() {
  return (
    <div className='freecodecamp-logo-container'>
      <img className='freecodecamp-logo'
           src={FreeCodeCamp}
           alt='FreeCodeCamp Logo' />
    </div>
  )
};

export default Logo