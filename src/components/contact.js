import React, { Component } from "react";
import contactPicture from "../assets/contactimage.jpg";
import prizedCow from "../assets/prizedCow.jpg";
import poofNeck from "../assets/poofNeck.jpg";
import itsBits from "../assets/itsBits.jpg";
import { Carousel } from "react-bootstrap";

class Contact extends Component {
  render() {
    return (
      <div className="projectsGrid">
        <div className="image">
          <img src={contactPicture} alt="brandon" />
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
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={prizedCow} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={poofNeck} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={itsBits} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        <div className="description">
          My Animals enjoy helping me test my code!
        </div>
      </div>
    );
  }
}

export default Contact;
