// LIBRARY
import React from 'react';

let { PropTypes } = React;

let schema = class Schema extends React.Component {
  constructor(props) {
    super(props);
    this.propsTypes = {
      schema: PropTypes.object.isRequired
    };
  }

  render() {
    const markup = {__html: '<script type="application/ld+json">'
        + JSON.stringify(this.props.schema)
      + '</script>'};
    return (
      <div dangerouslySetInnerHTML={markup} />
    );
  }
};

schema.prototype.displayName = 'Schema';

export default schema;
