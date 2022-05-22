import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  max-height: 800px;
  // margin-bottom: 60px;
  width: 100%;
`

export const Wrapper = styled.div`
  position: relative;
`

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-top: 10px;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    text-transform: none;
    text-shadow: 2px 2px rgb(18,36,115);
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 4rem;
    }
  }
`
