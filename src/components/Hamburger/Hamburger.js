import React from 'react';
import { HamburgerButton } from './Hamburger.styles';
// change for church, keep name `menu-icon.svg`
import HamburgerIcon from '../../images/menu-icon.svg';


const Hamburger = ({ handleOverlayMenu }) => {
  return (
    <HamburgerButton onClick={handleOverlayMenu} >
      {/* change for church */}
      <img src={HamburgerIcon} alt="menu button" />
    </HamburgerButton>
  )
}

export default Hamburger;