// LIBRARY
import React from 'react';

// FLUX
import AppStore from '../../stores/AppStore';
import connectToStores from 'alt/utils/connectToStores';

// COMPONENT
import PostItem from '../Post/PostItem';

if (process.env.BROWSER) {
  require('./_HomeSection.scss');
}

let homeSection = class HomeSection extends React.Component {
  constructor() {
    super();
  }

  render() {
    // retrieve data from store
    let posts = HomeSection.getPropsFromStores().posts;
    let postItems = [];
    for (var key in posts) {
      let keyHr = 'hr' + key;
      postItems.push(<hr key={keyHr} />);
      postItems.push(<PostItem key={key} post={posts[key]} />);
    }

    return (
      <div>
        <div className='wrapper'>
          {postItems}
        </div>
      </div>
    );
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

homeSection.prototype.displayName = 'HomeSection';

export default connectToStores(homeSection);
