import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profileImage from '../assets/profileImage.jpg';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>

            <div className="banner-text">
              <h1>Brandon Adcock.</h1>
              <hr/>

              <p>HTML/CSS | Bootstrap | JavaScript | React | Express | MongoDB</p>


             </div>

            </Cell>
            <Cell col={4}>
                  <img src={profileImage} className="profileImage"/>
                

            </Cell>
            <Cell col={8}>

            <div className="aboutMeContainer">
              <h1>About Me</h1>
              <p>I'm a navy veteran who spent years in healthcare working with buggy software that spired my interest in coding. I spent my 2020 quarantine learning Javascript and building projects in React and am currently looking for a company to put my new skills to good use.</p>

            </div>

            </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;