import styled from 'styled-components';

export const Wrapper = styled.aside`
  margin-top: 40px;
  min-width: 25%;

  @media (min-width: 992px) {
    margin: 100px 15px 0 0;
    padding-left: 30px;
  }
`;

export const Menu = styled.ul`
  list-style-type: none;
  padding: 0 20px 0 0;
  margin: 0;

  .sidebar-menu-header {
    display: flex;
    font-family: 'Teko', Arial, Helvetica, sans-serif;
    border-bottom: 2px #e4e4e4 solid;
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 1px;
    margin: 0 0 20px 0;
    padding: 0 0 5px 0;
    text-transform: uppercase;

    img {
      margin-bottom: 5px;
      padding: 0 10px 0 0;
      width: 38px;
      height: auto;
    }
  }

  li {
    margin: 0 0 5px 38px;
    color: #000;
    font-family: 'Teko', Arial;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 1px;

    a:hover {
      color: #122473; // sidebar hover color
    }
  }

  .sidebar-highlighted {
    color: #122473;
  }

  p {
    font-size: 0.85rem;
    line-height: 1.2rem;
    letter-spacing: 0.5px;

    a {
      font-weight: 800;
    }
  }
`;
