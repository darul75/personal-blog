// LIBRARY
/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/*eslint-enable no-unused-vars*/

// FLUX
import AppStore from '../../stores/AppStore';
import connectToStores from 'alt/utils/connectToStores';

// COMPONENT
import PostItem from '../Post/PostItem';
import Tags from '../Tags/Tags';

if (process.env.BROWSER) {
  require('./_HomeSection.scss');
}

let homeSection = class HomeSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: AppStore.getState().posts,
      tags: HomeSection.getPropsFromStores().tags,
      selectedTag: ''
    };

    this.handleOnClickTag = this.handleOnClickTag.bind(this);
  }

  handleOnClickTag(tag) {
    const originalPosts = HomeSection.getPropsFromStores().posts;
    if (this.state.selectedTag === tag) {
      this.setState({posts: originalPosts, selectedTag: ''});
      return;
    }
    const filteredPosts = originalPosts.filter((post) => {
      return ~post.tags.indexOf(tag);
    });
    this.setState({
      posts: filteredPosts,
      selectedTag: tag
    });
  }

  render() {
    // retrieve data from store
    let posts = this.state.posts;
    let postItems = [];
    for (var key in posts) {
      let keyHr = 'hr' + key;
      postItems.push(<hr key={keyHr} />);
      postItems.push(<PostItem key={key} post={posts[key]} />);
    }

    let title = !this.props.params ? '' : <h1 className='section'>Blog</h1>;
    return (
      <div className='wrapper'>
        <Tags handleOnClickTag={this.handleOnClickTag} tags={this.state.tags} selectedTag={this.state.selectedTag} />
        {title}
        {postItems}
      </div>
    );
  }

  static getStores() {
    return [AppStore];
  }

  static getPropsFromStores() {
    return {
      posts: AppStore.getState().posts,
      tags: AppStore.getState().tags
    };
  }
};

homeSection.prototype.displayName = 'HomeSection';

export default connectToStores(homeSection);
