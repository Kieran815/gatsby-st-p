import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: #212121;
  color: #fff;
  margin-bottom: 0;
  padding-top: 15px;
  text-align: center;
  height: 200px;

  a {
    color: #fff;
  }

  p {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 420px) {
    flex-direction: column;
    height: 100%;
    // > div {
    //   padding: 10px 0;
    // }
  }
`;

export const LocationWrapper = styled.div`
  width: 90%;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  @media (max-width: 420px) {
    flex-direction: column;
    height: 100%;
    > * {
      padding: 10px 0;
    }
  }
`

export const SocialMediaLinks = styled.div`
  a {
    padding: 0 10px;
  }
`

export const Signature = styled.div`
  background: #212121;
  font-size: 0.5em;
  bottom: 5px;
  height: 100px;
  width: 100%;
  padding-top: 20px;
  text-align: center;
`
