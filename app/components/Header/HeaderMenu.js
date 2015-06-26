// LIBRARY
import React from 'react';
import { Link } from 'react-router';

// FLUX
import AppStore from '../../stores/AppStore';
import connectToStores from 'alt/utils/connectToStores';

if (process.env.BROWSER) {
  require('./_HeaderMenu.scss');
}

let headerMenu = class HeaderMenu extends React.Component {
  constructor() {
    super();
    this.state = {selected: false};
  }

  render() {
    let menuBtnClass = !this.state.selected ? 'c-hamburger c-hamburger--rot' : 'c-hamburger c-hamburger--rot c-hamburger--htx is-active';
    let menuClass = !this.state.selected ? '' : 'overlord_active';
    let posts = HeaderMenu.getPropsFromStores().posts;
    let postLinks = [];
    for (var key in posts) {
      let post = posts[key];
      let postPermalink = '/post/' + post.permalink;
      postLinks.push(<li key={key}><Link to={postPermalink}>{post.title}</Link></li>);
    }

    return (
      <nav id='overlord' className={menuClass} onMouseLeave={this._onClick.bind(this)}>
        <button className={menuBtnClass}
          onClick={this._onClick.bind(this)}
          onMouseEnter={this._onClick.bind(this)}>
          <span>toggle menu</span>
        </button>
        <ul id='dropdown' className='onblog'>
          {postLinks}
        </ul>
      </nav>
    );
  }

  _onClick() {
    this.setState({
      selected: !this.state.selected
    });
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
