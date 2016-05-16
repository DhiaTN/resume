'use strict'

import React from 'react';
import ReactDOM from 'react-dom';


class Experience extends React.Component {

  render(){

    return (
      <div className="bs-callout bs-callout-danger">
        <h4>Experiences</h4>

        <ul className="list-group">

          <a className="list-group-item inactive-link" href="#">
            <h4 className="list-group-item-heading">
              Backend Engineer <i className="fa fa-map-marker" aria-hidden="true"></i> Ambient Innovation GmbH
            </h4>
            <div className="row">
              <div className="col-md-10">
                <p className="list-group-item-text">
                </p>
                <ul>
                  <li>
                    Implementing mobile apps backend.
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                  <img className="img-company img-responsive" src={"assets/img/ai.png"}/>
              </div>
            </div>
          </a>

          <a className="list-group-item inactive-link" href="#">
            <h4 className="list-group-item-heading">Software Engineer <i className="fa fa-map-marker" aria-hidden="true"></i> Rosafi</h4>
            <div className="row">
              <div className="col-md-10">
                <p className="list-group-item-text">
                    Contributed to the development of Rosafi IaaS Platform:
                </p>
                <ul>
                  <li>
                    implemented a Command Line and a Web-based Interface to interact with the IaaS API.
                  </li>
                  <li>
                    implemented an API to automate the provisioning of KVM/XEN Virtual Machines.
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                  <img className="img-company img-responsive" src={"assets/img/rosafi.png"}/>
              </div>
            </div>
          </a>

        </ul>
      </div>
    );

  }
};

export default Experience;