import React, { Component } from "react";
import contactPicture from "../assets/contactimage.jpg";

class Contact extends Component {
  render() {
    return (
      <div className="projectsGrid">
        <div className="image">
          <img src={contactPicture} />
        </div>
        <div className="description">
          <h2>Get in touch!</h2>
          {/* <p>inspirational thing.</p> */}
          <a href="mailto:brandonladcock@gmail.com">
            <i className="far fa-envelope icon"></i>
            brandonladcock@gmail.com
          </a>
          <a href="https://github.com/BrandeenoLee">
            <i className="fab fa-github icon"></i>
            github.com/BrandeenoLee
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
