import React from 'react';
import { Link } from "gatsby";
import UccLogo from '../../images/UCCLogo.png';
import CloseButton from '../../images/close_btn.svg';
import { useMenuQuery } from '../../hooks/useMenuQuery';
import { Overlay } from './OverlayMenu.styles';

const OverlayMenu = ({ menuOpen, callback }) => {

  const { wpMenu } = useMenuQuery();

  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <h1 id="overlayTitle">St. Peter's UCC</h1>
        <img className="overlayLogo" src={UccLogo} alt="inverted-logo" />
        <ul className="overlayMenu">
          {wpMenu.menuItems.nodes.map(item => (
            !item.parentId ? (
              <li key={item.id}>
                <Link to={item.url} activeClassName="overlayActive">
                  {item.label}
                </Link>
              </li>
            ) : null
          ))}
        </ul>
        <div className="closeButton" onClick={callback} onKeyDown={callback} role="button" tabIndex="0">
          <img src={CloseButton} alt="close-button"/>
        </div>

      </div>
    </Overlay>
  )
}

export default OverlayMenu;