import React from 'react';
import { Wrapper } from './SidebarMessage.styles';

import tangoMail from '../../images/mail-icon.svg';

const SidebarMessage = () => (
  <Wrapper>
    <div>
      <img src={tangoMail} alt='st-peters-mail' />
      <span>Join Our Mailing List</span>
    </div>
    <p>
      <br />
      Send Us Your Name and Email to Get the Latest Updates on Events, Membership and News.
      <br />
      <br />
      <button>
        <a href='mailto:stpetersuccfrankfortil@gmail.com'>Email</a>
      </button>
    </p>
  </Wrapper>
);

export default SidebarMessage;
