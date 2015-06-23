// LIBRARY
import React from 'react';
import { Link } from 'react-router';

if (process.env.BROWSER) {
  require('./_Header.scss');
}

let logo = require('./images/picture.jpg');

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {

    let logoStyle = {
      backgroundImage: 'url(' + logo + ')'
    };

    return (
      <div className='header'>
				<header id='user'>
          <figure id='user-logo' style={logoStyle}>
          </figure>
          <h2>JULIEN VALERY</h2>
          <h3>@darul75</h3>
					<ul id='user-links'>
            <li><Link to='app'>Home</Link></li>
            <li><Link to='todo'>Todo</Link></li>
            <li><Link to='contact'>Contact</Link></li>
					</ul>
				</header>
      </div>
    );
  }
}

Header.prototype.displayName = 'Header';
