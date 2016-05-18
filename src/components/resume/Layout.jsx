'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

import Info from './PersonalInfo.jsx';
import Summary from './Summary.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';
import Skills from './Skills.jsx';
import Interests from './Interests.jsx';


class Layout extends React.Component {

  render(){

    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                
                <div className="panel panel-default">

                    <Info/>
                    <Summary/>
                    <Education/>
                    <Experience/>
                    <Skills/>
                    <Interests/>

                </div>

            </div>
        </div>
    );

  }
};

export default Layout;