import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

export const StyledImg = styled(GatsbyImage)`
  max-height: 800px;
  width: 100%;
  display: block;
  margin: auto;
  margin-top: 110px;

  @media (max-width: 450px) {
    width: 100%;
    height: auto;
  }
`;
