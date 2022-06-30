import React from 'react';
import { Link } from 'gatsby';
import SidebarMessage from '../SidebarMessage/SidebarMessage';
import PageIcon from '../../images/page-icon.svg';
import { Wrapper, Menu } from './PageSidebar.styles';

const PageSideBar = ({ children, parentChildren, currentPage, parent }) => {
  
  // sorted child menu function  
  const sortedChildren = (prop) => {
    return function(a, b) {
      if (a[prop] === null) {
        return 99;
      }
      if (a[prop] > b[prop]) {
        return 1
      } else if (a[prop] < b[prop]) {
        return -1
      }
      return 0;
    }
  };

  if (children.nodes.length > 0 && children != null) {
    if (currentPage.id === "cG9zdDo2MDM=") {
      children.nodes.sort(sortedChildren("menuOrder"));
    } else {
      children.nodes.sort(sortedChildren("title"));
    }

  }
  
  if (parentChildren != null && parentChildren.length > 0) {
    // parentChildren.sort(sortedChildren("title"));
    if (currentPage.wpParent.node.id === "cG9zdDo2MDM=") {
      parentChildren.sort(sortedChildren("menuOrder"));
    } else {
      parentChildren.sort(sortedChildren("title"));
    }
  }

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
          <li key={child.id}>
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
      {parentChildren.sort(sortedChildren("menuOrder")).map(child => (
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

