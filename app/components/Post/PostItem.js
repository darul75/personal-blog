// LIBRARY
import React from 'react';

let { PropTypes } = React;

if (process.env.BROWSER) {
  require('./_PostItem.scss');
}

export default class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.propsTypes = {
      post: PropTypes.object.isRequired
    };
  }

  render() {
    let post = this.props.post;
    let postPermalink = 'post/' + post.permalink;

    return (
      <section className='post'>
        <h1>
          <a href={postPermalink}>{post.title}</a>
        </h1>
        <p dangerouslySetInnerHTML={{__html: post.body}}></p>
      </section>
    );
  }
}

PostItem.prototype.displayName = 'PostItem';
