import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { useHeroQuery } from '../../hooks/useHeroQuery';
import { Wrapper, HeaderWrapper, StyledImg } from './Hero.styles';

const Hero = () => {

  // re-base data call to only element needed (`ACF_HomePage`)
  // destructure `wpPage` from `useHeroQuery` data, pull `ACF_HomePage` and rename it `data`
  const { 
    wpPage: { ACF_HomePage: data },
  } = useHeroQuery();

  // helper function from gatsby
  const imageData = getImage(data.heroImage.localFile)

  return (
    <Wrapper>
      <StyledImg image={imageData} alt="Hero Image" />
      <HeaderWrapper>
        <h1>{data.heroText}</h1>
      </HeaderWrapper>
    </Wrapper>
  )
}

export default Hero;