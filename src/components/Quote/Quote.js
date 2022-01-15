// `47` from graph query corresponds to `post=47` on wp site
// change `47` to whatever updated value is for church site
// `citat` === `quote` in sweedish, change if using AdvancedCustomFields on church site

import React from "react";
import { useQuoteQuery } from "../../hooks/useQuoteQuery";
// icon from quote image (double quote icon)
import QuoteImg from "../../images/quote.svg";
import { Wrapper, Content } from "./Quote.styles";

const Quote = () => {
  const data = useQuoteQuery();
  console.log(data);
  
  return (
    <Wrapper>
      <Content>
        <img src={QuoteImg} alt="Quote Icon" />
        <h6>{data.wpPage.ACF_HomePage.quotation1Text}</h6>
        <p>{data.wpPage.ACF_HomePage.quotation1Author}</p>
      </Content>
    </Wrapper>
  )
}

export default Quote;