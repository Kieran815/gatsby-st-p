import styled from 'styled-components';

export const Wrapper = styled.nav`
  font-family: 'Teko', Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  color: #212121;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  display: none;

  .nav-active {
    color: #fff;
  }

  @media (min-width: 992px) {
    font-size: 0.85rem;
    display: block;
  }

  @media (min-width: 1200px) {
    font-size: 1rem;
  }

  ul li {
    display: block;
    margin: 0 10px 0 0;
    float: left;
    height: 30px;
    position: relative;

    a {
      display: flex;
      padding: 0 0 0 10px;
      transition: all 0.2s ease;
      text-decoration: none;
      color: #fff;

      div {
        margin: -4px 0 0 5px;
      }
    }
  }

  ul li:last-child {
    margin: 0;
  }

  ul li:hover > ul {
    display: block;
  }

  ul li a:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  ul li a:hover {
    color: #fff;
    
  }

  ul li a:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  

  ul ul {
    animation: fadeInMenu 0.3s both ease-in;
    display: none;
    position: absolute;
    left: 0;
    margin: 0;
    top: 30px;
    text-transform: none;
    background: rgb(18,36,115);
    padding: 15px 10px 10px 10px;
    box-shadow: 0px 6px 23px -10px rgba(0, 0, 0, 0.5);
  }

  ul ul li {
    width: auto;
    min-width: 170px;
  }

  ul ul li a {
    padding: 5px 10px;
    text-decoration: none;
    white-space: nowrap;
    color: #fff;
  }

  @keyframes fadeInMenu {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
