// LIBRARY
import React from 'react';
import { Link } from 'react-router';
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
    let time = '';
    let editUrl = '';

    if (post) {
      moreButton = <Link className='buttonize small' to={'/post/' + post.permalink}>Continue reading →</Link>;
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

      time = <time datetime={post.date.toString()}>{post.date}</time>;
      let homepage = PostItem.getPropsFromStores().packagejson.homepage;
      editUrl = homepage + '/edit/master/posts/2015/' + post.filename;

      //previewClass = '';

      // if (!post) {
      //   todo redirect
      // }
    }
    // param
    let postPermalink = '/post/' + post.permalink;
    let articleContainerClass = 'post ';

    return (
      <section>
        <article className={articleContainerClass}>
          <div className='markdown-body'>
            {time}
          </div>
          <a className='c-hamburger edition' href={editUrl} target='_blank'>
            <span>edition</span>
          </a>
          <h1>
            <Link to={postPermalink}>{post.title}</Link>
          </h1>
          <div className={markdownClass} dangerouslySetInnerHTML={{__html: post.body}}></div>
          <div className='buttons'>{moreButton}</div>
        </article>
      </section>
    );
  }

  static getStores() {
    return [AppStore];
  }

  static getPropsFromStores() {
    return {
      posts: AppStore.getState().posts,
      packagejson: AppStore.getState().packagejson
    };
  }
};

postItem.prototype.displayName = 'PostItem';

export default connectToStores(postItem);
