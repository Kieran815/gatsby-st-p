import React from 'react';
import { useCTAAreaQuery } from '../../hooks/useCTAAreaQuery';
import { Wrapper } from './CTAArea.styles';
import Cta from '../CTA/CTA';

const CTAArea = () => {

  const { cta } = useCTAAreaQuery();

  return (
    <Wrapper>
      {new Array(4).fill("").map((element, i) => (
        <Cta
          key={i}
          image={
            cta.ACF_HomePage[`cta${i+1}Image`].localFile.childImageSharp.gatsbyImageData
          }
          link={cta.ACF_HomePage[`cta${i+1}Link`]}
          text={cta.ACF_HomePage[`cta${i+1}Text`]}
        />
      ))}
    </Wrapper>
  )
}

export default CTAArea;