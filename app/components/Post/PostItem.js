// LIBRARY
import React from 'react';
import _ from 'lodash';

// FLUX
import AppStore from '../../stores/AppStore';
import connectToStores from 'alt/utils/connectToStores';

let { PropTypes } = React;

if (process.env.BROWSER) {
  require('./_PostItem.scss');
}

let postItem = class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.propsTypes = {
      post: PropTypes.object.isRequired
    };
  }

  render() {
    let post = this.props.post;
    if (this.props.params) {
      // from store
      let posts = PostItem.getPropsFromStores().posts;
      let postId = this.props.params.postId;
      // find by permalink
      post = _.find(posts, function(item) {
        return item.permalink === postId;
      });

      // if (!post) {
      //   todo redirect
      // }
    }
    // param
    let postPermalink = 'post/' + post.permalink;

    return (
      <section>
        <article className='post'>
          <h1>
            <a href={postPermalink}>{post.title}</a>
          </h1>
          <div className='markdown-body highlight' dangerouslySetInnerHTML={{__html: post.body}}></div>
        </article>
      </section>
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

postItem.prototype.displayName = 'PostItem';

export default connectToStores(postItem);
