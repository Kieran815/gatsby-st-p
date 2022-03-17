import React from 'react';
import { Wrapper, LocationWrapper, SocialMediaLinks, Signature } from './Footer.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"

// Will have to redo footer with more info
const Footer = () => {

  return (
    <Wrapper>
      <p><b>St. Peters UCC</b></p>
      <LocationWrapper>
        <div className="address">
          <a href="https://www.google.com/maps/place/St.+Peter's+Church/@41.495494,-87.8513537,17z/data=!3m1!4b1!4m5!3m4!1s0x880e135146058d7d:0x5fc99a174cba51ae!8m2!3d41.4954969!4d-87.8490492" target="_blank" rel="noopener noreferrer">
            <p><b>Address:</b></p>
            <p>12 West Sauk Trail</p>
            <p>Frankfort, IL 60423</p>
          </a>
        </div>

        <div>
          <p><b>Phone:</b></p>
          <a href="tel:+18154692220"><p>(815)469-2220</p></a>
        </div>
        
        <div className="service-schedule">
          <div>
            <p>
              <strong>Services:</strong>
              <br/>
              <span>Sundays @ 9:30a</span>
              <br/>
              <span>Communion First Sunday of Month</span>
              </p>
          </div>
        </div>
      
        <SocialMediaLinks>
          <a href="https://www.youtube.com/channel/UCwh08833xeuAZH6gUWmQyIg" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutubeSquare} size="3x" /></a>
          <a href="https://www.facebook.com/StPetersUnitedChurchOfChristFrankfort/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} size="3x" /></a>
        </SocialMediaLinks>
      </LocationWrapper>


      <Signature>
        Copyright &copy; {new Date().getFullYear()} St. Peter's UCC. All Rights Reserved.
        Made with love by <a href="https://www.kmilligan.info" target="_blank" rel="noopener noreferrer">K. Milligan</a>.
      </Signature>
    </Wrapper>
  )
}

export default Footer;