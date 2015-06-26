// LIBRARY
import React from 'react';
import { Link } from 'react-router';

// COMPONENT
import HeaderMenu from './HeaderMenu';

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
        <HeaderMenu />
				<header id='user'>
          <Link to='app'>
            <figure id='user-logo' style={logoStyle}></figure>
          </Link>
          <h2>JULIEN VALERY</h2>
          <h3>darul75</h3>
					<ul id='user-links'>
            <li><a className='buttonize tiny' href='https://twitter.com/darul75' target='_blank'>@darul75</a></li>
            <li><a className='buttonize tiny' href="mailto:darul75@gmail.com?subject=blog">say hi</a></li>
					</ul>
				</header>
      </div>
    );
  }
}

Header.prototype.displayName = 'Header';
