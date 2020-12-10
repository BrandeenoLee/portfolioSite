import React, { Component } from 'react';
import covidTrackerSS from '../assets/covidTrackerSS.png'
import { Grid, Cell } from 'react-mdl';

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
      <Grid>
        <Cell col={4}>
        <h1>COVID-19 Tracker</h1>
        <img
          src={covidTrackerSS}
          style={{height: '250px'}}/>
        </Cell>
        <Cell col={8}>
              <p>Displays information in a graph using an API that grabs current COVID-19 data.</p>
              <a href='https://github.com/BrandeenoLee/covid-tracker'></a>
              <i class="fab fa-github icon"></i>
              <p>deployed link</p>
        </Cell>
        <Cell col={4}>
          <h1>Weather App</h1>
              <img
                src={covidTrackerSS}
                style={{height: '250px'}}/>
        </Cell>
        <Cell col={8}>
              <p>Uses an API to return weather data requested by input ing a zipcode.</p>
              <a href='https://github.com/BrandeenoLee/covid-tracker'></a>
              <i class="fab fa-github icon"></i>
              <p>deployed link</p>
        </Cell>
        <Cell col={4}>
          <h1>Recipe App</h1>
              <img
                src={covidTrackerSS}
                style={{height: '250px'}}/>
        </Cell>
        <Cell col={4}>
              <p>Displays information in a graph using an API that grabs current COVID-19 data.</p>
              <a href='https://github.com/BrandeenoLee/covid-tracker'></a>
              <i class="fab fa-github icon"></i>
        <p>deployed link</p>
        </Cell>
      </Grid>
      </div>
      
    )
  }
}

export default Projects;