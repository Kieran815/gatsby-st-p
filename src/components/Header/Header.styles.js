import styled from 'styled-components';

export const Wrapper = styled.header`
  background: rgb(18, 36, 115);
  height: 110px;
  border-bottom: 1px solid #e7e7e7;
  position: fixed;
  width: 100%;
  z-index: 10000;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 20px;

  #homeLink {
    display: flex;
    align-items: center;

    h1 {
      color: white;
    }

    img {
      width: 75px;
      margin: 12px 5px;
    }
  }
`;
