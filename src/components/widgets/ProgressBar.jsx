'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

var progressBarStyle = function(level, active) {

  var main_style = "progress-bar",
    level_style = null,
    color_dict = {
      "guru": "progress-bar-guru",
      "good": "progress-bar-good",
      "intermediate": "progress-bar-intermediate",
      "newbie": "progress-bar-newbie"
    };
  
  switch (true) {
    case (level <= 25):
      level_style = color_dict["newbie"];
      break;
    case (level <= 50):
      level_style = color_dict["intermediate"];
      break;
    case (level <= 80):
      level_style = color_dict["good"];
      break;
    default:
      level_style = color_dict["guru"];
  }

  var css_class_array = [main_style, level_style];
  if (active == true) {
    css_class_array.push("progress-bar-striped active");
  }
  return css_class_array.join(" ");
};


class ProgressBar extends React.Component {

  render() {

    return ( 
      <div className="progress">
        <div data-placement="top" style={{"width": this.props.value + "%"}} aria-valuemax="100" aria-valuemin="0"
          aria-valuenow={this.props.value} role="progressbar" className={progressBarStyle(this.props.value, this.props.active)}>
          <span className="sr-only">{this.props.level}%</span>
          <span className="progress-type">{this.props.title}</span>
        </div>
      </div>
    );

  }
};

export default ProgressBar;