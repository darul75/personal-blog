// LIBRARY
import React from 'react';

if (process.env.BROWSER) {
  require('./_HeaderMenu.scss');
}

export default class HeaderMenu extends React.Component {
  constructor() {
    super();
    this.state = {selected: false};
  }

  render() {
    //  overlord_active overlord_open
    var className = !this.state.selected ? 'c-hamburger c-hamburger--rot' : 'c-hamburger c-hamburger--rot c-hamburger--htx is-active';
    return (
      <nav id='overlord'>
        <button className={className} onClick={this._onClick.bind(this)}>
          <span>toggle menu</span>
        </button>
        <ul id='dropdown' class='onblog'>
          <li><a href='https://twitter.com/dcurtis'>@dcurtis</a></li>
        </ul>
      </nav>
    );
  }

  _onClick() {
    this.setState({
      selected: !this.state.selected
    });
  }
}

HeaderMenu.prototype.displayName = 'HeaderMenu';
