import React, { Component } from 'react';
import covidTrackerSS from '../assets/covidTrackerSS.png'

class Projects extends Component {
  constructor(props) {
    super(props);
  }

render() {
  const projects = [
    {}
  ];
// projects {img, title, description, bullet points,  gitlink, deployed link}

    return(
      <div className="projectsContainer">
        <h1>Title</h1>
        <img
          src={covidTrackerSS}
          style={{height: '250px'}}/>
        <p>Description</p>
        <a href='https://github.com/BrandeenoLee/covid-tracker'></a>
         <i class="fab fa-github icon"></i>
        <p>deployed link</p>
      </div>
    )
  }
}

export default Projects;