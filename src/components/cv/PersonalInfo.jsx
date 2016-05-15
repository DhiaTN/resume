'use strict'

import React from 'react';
import ReactDOM from 'react-dom';


class PersonalInfo extends React.Component {

	render(){

		return (

      <div className="panel-heading resume-heading">
        <div className="row">
          <div className="col-lg-12">

            <div className="col-xs-12 col-sm-4">

              <figure>
                  <img className="img-circle img-responsive" alt="Dhia Abbassi" src={"assets/img/profil.png"} />
              </figure>

              <div className="row">
                <div className="col-xs-offset-2 social-btns">

                    <div className="col-xs-4 col-md-1 col-lg-1 social-btn-holder">
                      <a href="http://stackoverflow.com/users/5658350/dhiatn?tab=profile" className="btn btn-social btn-block btn-stackoverflow">
                        <i className="fa fa-stack-overflow"></i> </a>
                    </div>

                    <div className="col-xs-4 col-md-1 col-lg-1 social-btn-holder">
                      <a href="https://tn.linkedin.com/in/dhiaabbassi" className="btn btn-social btn-block btn-linkedin">
                        <i className="fa fa-linkedin"></i> </a>
                    </div>

                    <div className="col-xs-4 col-md-1 col-lg-1 social-btn-holder">
                      <a href="https://github.com/DhiaTN" className="btn btn-social btn-block btn-github">
                        <i className="fa fa-github"></i> </a>
                    </div>

                    <div className="col-xs-4 col-md-1 col-lg-1 social-btn-holder">
                      <a href="https://twitter.com/DhiaTN" className="btn btn-social btn-block btn-twitter">
                        <i className="fa fa-twitter"></i> </a>
                    </div>
                </div>
              </div>

            </div>

            <div className="col-xs-12 col-sm-8">
              <ul className="list-group">
                <li className="list-group-item"><i className="fa fa-user"></i> Dhia Abbassi</li>
                <li className="list-group-item"><i className="fa fa-briefcase"></i> Software Engineer</li>
                <li className="list-group-item"><i className="fa fa-building"></i> Ambient Innovation GmbH</li>
                <li className="list-group-item"><i className="fa fa-phone"></i> +49-157-863-72-443 </li>
                <li className="list-group-item"><i className="fa fa-envelope"></i> dhia.absi@gmail.com</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
		);

	}
};

export default PersonalInfo;