// LIBRARY
/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/*eslint-enable no-unused-vars*/

if (process.env.BROWSER) {
  require('./_Tags.scss');
}

export default class Tags extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tags = this.props.tags, markupTags = [];

    for (const tag in tags) {
      const style = this.props.selectedTag === tag ? {backgroundColor: '#FEF6BF'} : {};
      markupTags.push(<p key={tag} onClick={this.props.handleOnClickTag.bind(this, tag)} style={style} title='select <=> deselect'>{tag} ({tags[tag].length})</p>);
    }

    return (
      <div className='tags'>
        <div>{markupTags}</div>
      </div>
    );
  }
}

Tags.prototype.displayName = 'Tags';
