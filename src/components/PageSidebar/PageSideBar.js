import React from 'react';
import { Link } from 'gatsby';
import SidebarMessage from '../SidebarMessage/SidebarMessage';
import PageIcon from '../../images/page-icon.svg';
import { Wrapper, Menu } from './PageSidebar.styles';

const PageSideBar = ({ children, parentChildren, currentPage, parent }) => {

  const getParentContent = () => (
    // if parent page has children, show menu
    <>
      <ul>
        {/* header for sidebar w/ icon */}
        <li className="sidebar-menu-header">
          <img src={PageIcon} alt="Category Navigation" />
          <span dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        </li>
        {/* children pages */}
        {children.nodes.map(child => (
          <li ley={child.id}>
            <Link to={child.uri}>
              <span dangerouslySetInnerHTML={{ __html: child.title}} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  )

  const getChildContent = () => (
    <>
      <li className="sidebar-menu-header">
        <img src={PageIcon} alt="Category Navigation" />
        <span dangerouslySetInnerHTML={{ __html: parent }} />
      </li>
      {parentChildren.map(child => (
        <li key={child.id}>
          <Link to={child.uri} activeClassName="sidebar-highlighted">
            <span dangerouslySetInnerHTML={{ __html: child.title }} />
          </Link>
        </li>
      ))}
    </>
  )

  return (
    <Wrapper>
      {children.nodes.length === 0 && !parent ? (
        <SidebarMessage />
      ) : (
        <Menu>
          {parent ? getChildContent() : getParentContent()}
        </Menu>
      )}
    </Wrapper>
  )
}

export default PageSideBar;

