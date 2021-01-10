import React, { Component } from "react";
import covidTrackerSS from "../assets/covidTrackerSS.png";
import weatherAppSS from "../assets/weatherAppSS.png";
import allThingsWildSS from "../assets/allThingsWildSS.png";

class Projects extends Component {
  render() {
    return (
      <div className="projectsGrid">
        <div className="image">
          <img src={allThingsWildSS} alt="all things wild" />
        </div>
        <div className="description">
          <h2>All Things Wild Volunteer Portal</h2>
          <p>
            Application for a local nonprofit to manage volunteers using
            Next.js, React and Typescript.
          </p>
          <a href="https://github.com/BrandeenoLee/allThingsWild">
            <i className="fab fa-github icon"></i>
            github.com/BrandeenoLee/allThingsWild
          </a>
          <a href="https://all-things-wild-site.vercel.app/">
            <i className="fas fa-external-link-alt"></i>
            AllThingsWild.vercel.app
          </a>
        </div>

        <div className="image">
          <img src={covidTrackerSS} alt="covid tracker" />
        </div>
        <div className="description">
          <h2>COVID-19 Tracker</h2>
          <p>
            Displays information in a graph using an API that grabs current
            COVID-19 data.
          </p>
          <a href="https://github.com/BrandeenoLee/covid-tracker">
            <i className="fab fa-github icon"></i>
            github.com/BrandeenoLee/covid-tracker
          </a>
          <a href="https://globalcovidstats.netlify.app/">
            <i className="fas fa-external-link-alt"></i>
            globalcovidstats.netlify.app/
          </a>
        </div>

        <div className="image">
          <img src={weatherAppSS} alt="weather predictor" />
        </div>
        <div className="description">
          <h1>Weather App</h1>
          <p>
            Uses an API to return weather data requested by input ing a zipcode.
          </p>
          <a href="https://github.com/BrandeenoLee/weather-app">
            <i className="fab fa-github icon"></i>
            github.com/BrandeenoLee/weather-app
          </a>
          <a href="https://weathersearchbyzip.netlify.app/">
            <i className="fas fa-external-link-alt"></i>
            weathersearchbyzip.netlify.app/
          </a>
        </div>
      </div>
    );
  }
}

export default Projects;
