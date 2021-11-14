import React from 'react';
import { Link } from 'gatsby';
// Keep file name as `logo.svg` when updating for church
import Logo from '../../images/logo.svg';
import { useMenuQuery } from '../../hooks/useMenuQuery';
import { Wrapper, Content } from './Header.styles';

import Navigation from '../Navigation/Navigation';

const Header = () => {

  const { site, wpMenu } = useMenuQuery();

  return (
    <Wrapper>
      <Content>
        <Link  to="/">
          {/* Change for Church */}
          <img src={Logo} alt={site.siteMetadata.title} />
        </Link>
        {/* <Navigation menu={wpMenu.menuItems.nodes} /> */}
      </Content>
    </Wrapper>
  )
}

export default Header;