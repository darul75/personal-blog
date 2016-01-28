// LIBRARY
/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/*eslint-enable no-unused-vars*/

// put in store
let brandingLogoReq = require.context('../../images/branding/', false, /^\.\/.*\.svg$/);
let markupFilesKeys = brandingLogoReq.keys();
let brandingsMarkup = [];

markupFilesKeys.forEach((elt, idx) => {
  brandingsMarkup.push(<img src={brandingLogoReq(elt)} key={idx} width="40" height="40"/>);
});

if (process.env.BROWSER) {
  require('./_Footer.scss');
}

export default class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='footer'>
        <div>{brandingsMarkup}</div>
      </div>
    );
  }
}

Footer.prototype.displayName = 'Footer';
