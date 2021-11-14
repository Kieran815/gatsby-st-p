import React from 'react';
import { useCTAQuery } from '../../hooks/useCTAQuery';
import { Wrapper } from './CTAArea.styles';
import CTA from '../CTA/CTA';

const CTAArea = () => {

  const { cta } = useCTAQuery();
  console.log(data);
  return (
    <Wrapper>
      {new Array(3).fill("").map((element, i) => (
        <CTA
          key={i}
          image={
            cta.ACF_HomePage[`cta${i+1}Image`].sourceUrl
          }
          link={cta.ACF_HomePage[`cta${i+1}Link`]}
          text={cta.ACF_HomePage[`cta${i+1}Text`]}
        />
      ))}
    </Wrapper>
  )
}

export default CTAArea;