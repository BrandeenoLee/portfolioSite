import React from "react";
import profileImage from "../assets/profileImage.jpg";
import Banner from "./banner";
import { Row, Col } from 'react-bootstrap';


function Landing() {

    return (
        <>
        <div className="m-auto">
          <Row>
            <Col sm={8}>
              <Banner/>
            </Col>
            <Col sm={4}>
            <img src={profileImage} className="profileImage" alt="brandon" />
            </Col>
          </Row>
          <Row>
            <div className="aboutMeContainer mt-3">
              <h1>About Me</h1>
              <p>
                I'm a navy veteran who spent years in healthcare working with
                buggy software that spired my interest in coding. I spent my
                2020 quarantine learning Javascript and building projects in
                React and am currently looking for a company to put my new
                skills to good use.
              </p>
              <a href="/projects" className="button-link mt-2 d-inline-block">
                See My Projects
              </a>
            </div>
            </Row>
        </div>
        </>
    );
      
}

export default Landing;
