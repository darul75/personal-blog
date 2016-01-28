// LIBRARY
/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/*eslint-enable no-unused-vars*/
import { Link } from 'react-router';

// FLUX
import AppStore from '../../stores/AppStore';
import connectToStores from 'alt/utils/connectToStores';

if (process.env.BROWSER) {
  require('./_HeaderMenu.scss');
}

let headerMenu = class HeaderMenu extends Component {
  constructor() {
    super();
    this.state = {show: false};
  }

  render() {
    let menuBtnClass = !this.state.show ? 'c-hamburger c-hamburger--rot' : 'c-hamburger c-hamburger--rot c-hamburger--htx is-active';
    let menuClass = !this.state.show ? '' : 'overlord_active';
    let posts = HeaderMenu.getPropsFromStores().posts;
    let postLinks = [];
    for (var key in posts) {
      let post = posts[key];
      let postPermalink = '/post/' + post.permalink;
      postLinks.push(<li key={key}><Link to={postPermalink}>{post.title}</Link></li>);
    }

    return (
      <nav id='overlord' className={menuClass} onMouseLeave={this._onMouseLeave.bind(this)}>
        <button className={menuBtnClass} onClick={this._onClick.bind(this)}>
          <span>toggle menu</span>
        </button>
        <ul id='dropdown' className='onblog'>
          {postLinks}
        </ul>
      </nav>
    );
  }

  _onClick() {
    this.setState({show: !this.state.show});
  }

  _onMouseLeave() {
    this.setState({show: false});
  }

  static getStores() {
    return [AppStore];
  }

  static getPropsFromStores() {
    return {
      posts: AppStore.getState().posts
    };
  }
};

headerMenu.prototype.displayName = 'HeaderMenu';

export default connectToStores(headerMenu);
