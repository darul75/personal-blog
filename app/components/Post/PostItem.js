// LIBRARY
import React from 'react';

let { PropTypes } = React;

export default class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.propsTypes = {
      post: PropTypes.object.isRequired
    };
  }

  render() {
    var post = this.props.post;

    return (
      <div dangerouslySetInnerHTML={{__html: post.title}} />
    );
  }
}

PostItem.prototype.displayName = 'PostItem';
