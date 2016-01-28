// LIBRARY
/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/*eslint-enable no-unused-vars*/
import { Link } from 'react-router';

// COMPONENT
import HeaderMenu from './HeaderMenu';

if (process.env.BROWSER) {
  require('./_Header.scss');
}

let logo = require('./images/picture.jpg');

export default class Header extends Component {
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
          <Link to='/'>
            <figure id='user-logo' style={logoStyle}></figure>
          </Link>
          <h2>JULIEN VALERY</h2>
          <h3>darul75</h3>
					<ul id='user-links'>
            <li><a className='buttonize tiny' href='https://twitter.com/darul75' target='_blank'>@darul75</a></li>
            <li><a className='buttonize tiny' href='mailto:darul75@gmail.com?subject=blog' target='_blank'>say hi</a></li>
            <li><a className='buttonize tiny' href='https://github.com/darul75' target='_blank'>contribs</a></li>
            <li><a className='buttonize tiny' href='https://fr.linkedin.com/pub/julien-valery/70/624/b54' target='_blank'>serious</a></li>
					</ul>
				</header>
      </div>
    );
  }
}

Header.prototype.displayName = 'Header';
