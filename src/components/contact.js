import React, { Component } from 'react';
import contactPicture from '../assets/contactimage.jpg'

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <h2>Contact Me</h2>
        <img
          src={contactPicture}
          style={{height: '250px'}}
              />
       <div>
        <a href='mailto:brandonladcock@gmail.com'>
          <i className="far fa-envelope icon"></i>
            brandonladcock@gmail.com
         </a>
       </div> 
       <div>
         <a href='https://github.com/BrandeenoLee'>
         <i className="fab fa-github icon"></i>
             github.com/BrandeenoLee
         </a>
       </div>
      </div>
    )
  }
}

export default Contact;