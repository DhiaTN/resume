'use strict'

import React from 'react';
import ReactDOM from 'react-dom';


class ProgressMeter extends React.Component {

  render() {

    return ( 
		<div className="progress-meter">
		  <div style={{"width": "20%"}} className="meter meter-left"><span className="meter-text">Newbie</span></div>
		  <div style={{"width": "30%"}} className="meter meter-left"><span className="meter-text">Intermediate</span></div>
		  <div style={{"width": "35%"}} className="meter meter-left"><span className="meter-text">Good</span></div>
		  <div style={{"width": "15%"}} className="meter meter-left"><span className="meter-text">Guru</span></div>
		</div>
    );

  }
};

export default ProgressMeter;