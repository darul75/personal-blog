// LIBRARY
/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/*eslint-enable no-unused-vars*/
import Helmet from 'react-helmet';

// TODO: do it in store maybe
const metas = require('../../../assets/config.json').helmet;

export default class HtmlHeaderTags extends Component {
  constructor() {
    super();
  }

  render() {
    // DOM <head> instrumentation
    let titleTemplate = '%s | Julien Valéry';
    return (
      <div>
        <Helmet title={metas.title} meta={metas.meta} link={metas.link} titleTemplate={titleTemplate} />
      </div>
    );
  }
}

HtmlHeaderTags.prototype.displayName = 'HtmlHeaderTags';
