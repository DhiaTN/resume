'use strict'

import React from 'react';
import ReactDOM from 'react-dom';


class Education extends React.Component {

  render(){

    return (
      <div className="bs-callout bs-callout-danger">
          <h4>Education</h4>
          <table className="table table-striped table-responsive ">
            <thead>
              <tr><th>Degree</th>
              <th>Graduation Year</th>
            </tr></thead>
            <tbody>
              <tr>
                <td>Engineering Degree in Computer Science</td>
                <td>2014</td>
              </tr>
              <tr>
                <td>BSc. in Maths-Physics</td>
                <td>2011</td>
              </tr>
            </tbody>
          </table>
      </div>
    );

  }
};

export default Education;