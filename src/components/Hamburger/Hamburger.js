import React from 'react';
import { HamburgerButton } from './Hamburger.styles';
// change for church, keep name `menu-icon.svg`
// import HamburgerIcon from '../../images/menu-icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Hamburger = ({ handleOverlayMenu }) => {
  return (
    <HamburgerButton onClick={handleOverlayMenu} >
      {/* change for church */}
      {/* <img src={HamburgerIcon} alt="menu button" /> */}
      <FontAwesomeIcon icon={faBars} size="2x" />
    </HamburgerButton>
  )
}

export default Hamburger;