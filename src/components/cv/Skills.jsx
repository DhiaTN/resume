'use strict'

import React from 'react';
import ReactDOM from 'react-dom';


var progressBarStyle = function (level, active) {
  
  var main_style = "progress-bar",
      color_dict = {"guru": "progress-bar-guru",
                    "good": "progress-bar-good",
                    "intermediate": "progress-bar-intermediate",
                    "newbie": "progress-bar-newbie"};

  var css_class_array = [main_style, color_dict[level]];
  if (active == true) {
    css_class_array.push("progress-bar-striped active");
  }
  return css_class_array.join(" ");
};


class Skills extends React.Component {

  render(){

    return (
      <div className="bs-callout bs-callout-danger">

        <h4>Language and Platform Skills</h4>

        <ul className="list-group">
          <a className="list-group-item inactive-link" href="#">

            <div className="progress">
              <div data-placement="top" style={{"width": "80%"}} aria-valuemax="100" aria-valuemin="0" aria-valuenow="80" role="progressbar" className={progressBarStyle("good", true)}>
                <span className="sr-only">80%</span>
                <span className="progress-type">Python</span>
              </div>
            </div>
            <div className="progress">
              <div data-placement="top" style={{"width": "75%"}} aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" role="progressbar" className={progressBarStyle("good", true)}>
                <span className="sr-only">75%</span>
                <span className="progress-type">Django</span>
              </div>
            </div>
            <div className="progress">
              <div data-placement="top" style={{"width": "65%"}} aria-valuemax="100" aria-valuemin="0" aria-valuenow="65" role="progressbar" className={progressBarStyle("good", true)}>
                <span className="sr-only">65%</span>
                <span className="progress-type">JavaScript</span>
              </div>
            </div>
            <div className="progress">
              <div data-placement="top" style={{"width": "65%"}} aria-valuemax="100" aria-valuemin="0" aria-valuenow="65" role="progressbar" className={progressBarStyle("good")}>
                <span className="sr-only">65%</span>
                <span className="progress-type">AngularJS</span>
              </div>
            </div>
            <div className="progress">
              <div data-placement="top" style={{"width": "35%"}} aria-valuemax="100" aria-valuemin="0" aria-valuenow="35" role="progressbar" className={progressBarStyle("intermediate", true)}>
                <span className="sr-only">35%</span>
                <span className="progress-type">ReactJS</span>
              </div>
            </div>
            <div className="progress">
              <div data-placement="top" style={{"width": "15%"}} aria-valuemax="100" aria-valuemin="0" aria-valuenow="15" role="progressbar" className={progressBarStyle("newbie")}>
                <span className="sr-only">15%</span>
                <span className="progress-type">Ruby on Rails</span>
              </div>
            </div>

            <div className="progress-meter">
              <div style={{"width": "25%"}} className="meter meter-left"><span className="meter-text">Newbie</span></div>
              <div style={{"width": "25%"}} className="meter meter-left"><span className="meter-text">Intermediate</span></div>
              <div style={{"width": "30%"}} className="meter meter-left"><span className="meter-text">Good</span></div>
              <div style={{"width": "20%"}} className="meter meter-left"><span className="meter-text">Guru</span></div>
            </div>

          </a>

        </ul>

      </div>
    );

  }
};

export default Skills;