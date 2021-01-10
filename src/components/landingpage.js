import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import profileImage from "../assets/profileImage.jpg";
import Banner from "./banner";
import { render } from 'react-dom';
import Container from './container';


function Landing() {

    return (
     <Container>
        <Grid className="landing-grid">
          <Cell col={6}>
            <Banner/>
          </Cell>
          <Cell col={4}>
            <img src={profileImage} className="profileImage" />
          </Cell>
          <Cell col={8}>
            <div className="aboutMeContainer">
              <h1>About Me</h1>
              <p>
                I'm a navy veteran who spent years in healthcare working with
                buggy software that spired my interest in coding. I spent my
                2020 quarantine learning Javascript and building projects in
                React and am currently looking for a company to put my new
                skills to good use.
              </p>
            </div>
          </Cell>
        </Grid>
        </Container>
    );
      
}

export default Landing;
