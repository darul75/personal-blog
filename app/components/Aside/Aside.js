// LIBRARY
import React from 'react';

let logo = require('./images/picture.jpg');

if (process.env.BROWSER) {
  require('./_Aside.scss');
}

export default class Aside extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='Aside wrapper'>
        <img src={logo} height='60' />
      </div>
    );
  }
}

Aside.prototype.displayName = 'Aside';
