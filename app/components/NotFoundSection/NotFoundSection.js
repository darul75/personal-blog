// LIBRARY
/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/*eslint-enable no-unused-vars*/

export default class NotFoundSection extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>PAGE NOT FOUND</h1>
        <p>yes indeed</p>
      </div>
    );
  }
}

NotFoundSection.prototype.displayName = 'NotFoundSection';
