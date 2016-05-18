'use strict'

import React from 'react';
import ReactDOM from 'react-dom';


class Summary extends React.Component {

  render(){

    return (
      <div className="bs-callout bs-callout-danger">
        <h4>Summary</h4>
        <p align="justify">
          Junior pythonist, javascripter, open source enthusiast and eternal learner with special interest in Data Visualization, Cloud Computing and scalable architecture.
          I have skills in both frontend and backend web development. From basic CRUD apps, to stateful JavaScript applications on top of JSON REST like APIs. I have a good experience with Python, Django and JavaScript.
          My formula for living is quite simple. I get up in the morning and I go to bed at night. In between, I occupy myself as best I can.
        </p>
      </div>
    );

  }
};

export default Summary;