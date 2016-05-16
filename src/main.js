'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/cv/Layout.jsx';


class Resume extends React.Component {

  render(){

    return (

    <div className="resume">

        <header className="page-header">
          <h1 className="page-title">Resume of Dhia Abbassi</h1>
          <small> <i className="fa fa-clock-o"></i> Last Updated on: <time>Sunday, April 15, 2016</time></small>
        </header>

        <Layout/>

    </div>

    );

  }
};

ReactDOM.render(<Resume/>, document.getElementById('cv'));