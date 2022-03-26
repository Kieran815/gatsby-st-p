import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  background: #212121;
  color: #fff;
  margin-bottom: 0;
  padding-top: 15px;
  text-align: center;

  a {
    color: #fff;
  }

  p {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 420px) {
    flex-direction: column;
    > div {
      padding: 10px 0;
    }
  }
`;

export const LocationWrapper = styled.div`
  width: 90%;
  padding: 20px 0;
  display: flex;
  height: 100%;
  align-items: flex-start;
  justify-content: space-around;
  text-align: center;
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    > * {
      padding: 10px 0;
    }
  }
`

export const SocialMediaLinks = styled.div`
  a {
    padding: 10px;
  }
`

export const Signature = styled.div`
  background: #212121;
  font-size: 0.5em;
  height: 50px;
  width: 100%;
  padding-top: 20px;
  text-align: center;
`
