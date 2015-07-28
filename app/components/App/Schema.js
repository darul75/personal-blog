// LIBRARY
import React from 'react';

// FLUX
import AppStore from '../../stores/AppStore';
import connectToStores from 'alt/utils/connectToStores';

let schema = class Schema extends React.Component {
  constructor() {
    super();
  }

  render() {
    const markup = {__html: '<script type="application/ld+json">'
        + '{'
        + '"@context": "http://schema.org",'
        + '"@type": "Person",'
        + '"name": "Julien Valéry",'
        + '"url": "http://www.darul.io",'
        + '"sameAs" : ['
        + '"https://github.com/darul75",'
        + '"https://fr.linkedin.com/pub/julien-valery/70/624/b54",'
        + '"https://twitter.com/darul75"'
        + ']'
        + '}'
      + '</script>'};
    return (
      <div dangerouslySetInnerHTML={markup} />
    );
  }

  static getStores() {
    return [AppStore];
  }

  static getPropsFromStores() {
    return {
    };
  }
};

schema.prototype.displayName = 'Schema';

export default connectToStores(schema);
