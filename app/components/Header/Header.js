// LIBRARY
import React from 'react';
import { Link } from 'react-router';

if (process.env.BROWSER) {
  require('./_Header.scss');
}

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='header'>
				<header>
					<ul>
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
