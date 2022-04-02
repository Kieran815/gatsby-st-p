import React from 'react';
import { Link } from 'gatsby';
// Keep file name as `logo.svg` when updating for church
import UCC_Logo from '../../images/UCCLogo.png';
import { useMenuQuery } from '../../hooks/useMenuQuery';
import { Wrapper, Content } from './Header.styles';

import Navigation from '../Navigation/Navigation';

const Header = () => {

  const { site, wpMenu } = useMenuQuery();

  return (
    <Wrapper>
      <Content>
        <Link id="homeLink"  to="/">
          <img src={UCC_Logo} alt={site.siteMetadata.title} /><h1>St. Peter's UCC</h1>
        </Link>
        <Navigation menu={wpMenu.menuItems.nodes} />
      </Content>
    </Wrapper>
  )
}

export default Header;