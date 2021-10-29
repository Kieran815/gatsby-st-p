import React from 'react';
import { Link } from 'gatsby';
import SidebarMessage from '../SidebarMessage/SidebarMessage';
import PageIcon from '../../images/page-icon.svg';
import { Wrapper } from './PageSidebar.styles';

const PageSideBar = ({ children, parentChildren, currentPage, parent }) => {

  return (
    <Wrapper>
      {children.nodes.length === 0 && !parent ? (
        <SidebarMessage />
      ) : (
        <div>Menu</div>
      )}
    </Wrapper>
  )
}

export default PageSideBar;

