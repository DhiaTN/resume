'use strict'

import React from 'react';
import ReactDOM from 'react-dom';


class Interests extends React.Component {

  render(){

    return (
      <div className="bs-callout bs-callout-danger">
	      <h4>Interests</h4>
        <ul className="list-group">
          <li className="list-group-item"> Love doing sport, playing football, biking and hiking(specially in winter) </li>
          <li className="list-group-item"> Love lying down on the grass in parks and enjoying the peace of mind </li>
          <li className="list-group-item"> Love watching movies specially on big Cinemas screens</li>
          <li className="list-group-item"> Love chocolate</li>
        </ul>
      </div>
    );

  }
};

export default Interests;