// LIBRARY
import React from 'react';
import _ from 'lodash';

// FLUX
import AppStore from '../../stores/AppStore';
import connectToStores from 'alt/utils/connectToStores';

let prism = require('prismjs');

let { PropTypes } = React;

if (process.env.BROWSER) {
  require('./_PostItem.scss');
  require('../../../assets/js/prism/prism.css');
}

let postItem = class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.propsTypes = {
      post: PropTypes.object.isRequired
    };
  }

  componentDidMount() {
    setTimeout(() => {
      prism.highlightAll(() => {

      });
    });
  }

  render() {
    let post = this.props.post;
    let markdownClass = 'markdown-body highlight preview';
    let moreButton = '';
    if (post) {
      moreButton = '<a class="buttonize small" href="' + 'post/' + post.permalink + '">Continue reading →</a>';
    }

    if (this.props.params) {
      markdownClass = 'markdown-body highlight';
      // from store
      let posts = PostItem.getPropsFromStores().posts;
      let postId = this.props.params.postId;
      // find by permalink
      post = _.find(posts, function(item) {
        return item.permalink === postId;
      });

      //previewClass = '';

      // if (!post) {
      //   todo redirect
      // }
    }
    // param
    let postPermalink = 'post/' + post.permalink;
    let articleContainerClass = 'post ';

    return (
      <section>
        <article className={articleContainerClass}>
          <h1>
            <a href={postPermalink}>{post.title}</a>
          </h1>
          <div className={markdownClass} dangerouslySetInnerHTML={{__html: post.body}}></div>
          <div className='buttons' dangerouslySetInnerHTML={{__html: moreButton}}></div>
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
