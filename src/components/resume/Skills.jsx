'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

import ProgressBar from '../widgets/ProgressBar.jsx'
import ProgressMeter from '../widgets/ProgressMeter.jsx'


class Skills extends React.Component {

  render(){

    return (
      <div className="bs-callout bs-callout-danger">

        <h4>Language and Platform Skills</h4>

        <ul className="list-group">
          <a className="list-group-item inactive-link" href="#">

            <ProgressBar value={80} title="Python" active={true}/>
            <ProgressBar value={75} title="Django" active={true}/>
            <ProgressBar value={65} title="Javascript"/>
            <ProgressBar value={65} title="AngularJS"/>
            <ProgressBar value={35} title="ReactJS" active={true}/>
            <ProgressBar value={15} title="Ruby on Rails"/>
            
            <ProgressMeter/>
          </a>

        </ul>

      </div>
    );

  }
};

export default Skills;