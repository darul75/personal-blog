// LIBRARY
import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
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
      prism.highlightAll(() => {});

      if (this.props.params) {
        /*eslint-disable */
        let disqus_shortname = 'darul';      
        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
        /*eslint-enable */
      }
    });
  }

  componentDidUpdate() {
    setTimeout(() => {
      prism.highlightAll(() => {});
    });
  }

  render() {
    let post = this.props.post,
        disqusMarkup = '',
        markdownClass = 'markdown-body highlight preview',
        moreButton = '',
        backButton = '',
        time = '',
        editUrl = '',
        helmetMarkup = '',
        editButtonMarkup = '';

    if (post) {
      moreButton = <Link className='buttonize small' to={'/post/' + post.permalink}>Continue reading →</Link>;
    }

    if (this.props.params) {
      markdownClass = 'markdown-body highlight';
      // from store
      let posts = PostItem.getPropsFromStores().posts;
      let postId = this.props.params.postId;
      let title = PostItem.getPropsFromStores().config.helmet.title;
      // find by permalink
      post = _.find(posts, function(item) {
        return item.permalink === postId;
      });

      time = <time dateTime={post.date.toString()}>{post.date}</time>;
      let homepage = PostItem.getPropsFromStores().packagejson.homepage;
      editUrl = homepage + '/edit/master/posts/2015/' + post.filename;
      editButtonMarkup = <a href={editUrl} target='_blank' title='edit me'>
        <button className='c-hamburger edition' href={editUrl} target='_blank'>
          <span>edition</span>
        </button>
      </a>;
      let templateTitle = '%s | ' + post.title;
      let postTitle = title + ' | ' + post.title;
      helmetMarkup = <Helmet title={title} titleTemplate={templateTitle} meta={[
        {'name': 'description', 'content': postTitle},
        {'property': 'og:type', 'content': 'article'}
      ]} />;

      disqusMarkup = <div id='disqus_thread'></div>;
      backButton = <Link className='buttonize small' to={'/'}>Home</Link>;

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
          {editButtonMarkup}
          <h1>
            <Link to={postPermalink}>{post.title}</Link>
          </h1>
          <div className={markdownClass} dangerouslySetInnerHTML={{__html: post.body}}></div>
          <div className='buttons'>
            {moreButton}
            {backButton}
          </div>
          {helmetMarkup}
          {disqusMarkup}
        </article>
      </section>
    );
  }

  static getStores() {
    return [AppStore];
  }

  static getPropsFromStores() {
    return {
      config: AppStore.getState().config,
      posts: AppStore.getState().posts,
      packagejson: AppStore.getState().packagejson
    };
  }
};

postItem.prototype.displayName = 'PostItem';

export default connectToStores(postItem);
