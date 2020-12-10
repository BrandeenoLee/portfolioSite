import React, { Component } from 'react';
import covidTrackerSS from '../assets/covidTrackerSS.png';
import weatherAppSS from '../assets/weatherAppSS.png';
import recipeAppSS from '../assets/recipeAppSS.png'
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
        <Cell className='cell1'col={4}>

          <img
            src={covidTrackerSS}
            style={{height: '250px'}}/>
        </Cell>
        <Cell col={8}>
              <h1>COVID-19 Tracker</h1>
              <p>Displays information in a graph using an API that grabs current COVID-19 data.</p>
              <a href='https://github.com/BrandeenoLee/covid-tracker'>
                <i class="fab fa-github icon"></i>
                  github.com/BrandeenoLee/covid-tracker
              </a>
              <div>
                 <a href='https://globalcovidstats.netlify.app/'>
                 <i class="fas fa-external-link-alt"></i>
                    globalcovidstats.netlify.app/
                </a>
              </div>
              
        </Cell>
        <Cell col={4}>
  
              <img
                src={recipeAppSS}
                style={{height: '250px'}}/>
        </Cell>
        <Cell col={8}>
              <h1>Recipe Search App</h1>
              <p>Use API to return recipes by keyword search.</p>
              <a href='https://github.com/BrandeenoLee/reactRecipeApp'>
                <i class="fab fa-github icon"></i>
                  github.com/BrandeenoLee/reactRecipeApp
              </a>

        </Cell>
        <Cell col={4}>

              <img
                src={weatherAppSS}
                style={{height: '250px'}}/>
        </Cell>
        <Cell col={8}>
              <h1>Weather App</h1>
              <p>Uses an API to return weather data requested by input ing a zipcode.</p>
              <a href='https://github.com/BrandeenoLee/weather-app'>
                <i class="fab fa-github icon"></i>
                  github.com/BrandeenoLee/weather-app
              </a>
              <div>
                 <a href='https://weathersearchbyzip.netlify.app/'>
                 <i class="fas fa-external-link-alt"></i>
                    weathersearchbyzip.netlify.app/
                </a>
              </div>
        </Cell>
      </Grid>
      </div>
      
    )
  }
}

export default Projects;