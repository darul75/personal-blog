// LIBRARY
/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/*eslint-enable no-unused-vars*/

// COMPONENT
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HtmlHeaderTags from '../Document/HtmlHeaderTags';
import Schema from './Schema';

// FLUX
import AppStore from '../../stores/AppStore';
import connectToStores from 'alt/utils/connectToStores';

if (process.env.BROWSER) {
  //require('../../../node_modules/github-markdown-css/github-markdown.css');
  require('./_App.scss');
  require('file?name=favicon.ico!../../images/favicon.ico');
  require('../../../assets/js/google/google');
  require.context('../../images/posts', true, /\.(jpe?g|png|gif|woff|eot|ttf)$/);
}

let app = class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let menu = App.getPropsFromStores().menu;
    let slideForMenu = menu ? 'slide' : '';
    slideForMenu += App.getPropsFromStores().menuHide ? 'Off' : '';
    const schemaObj = {
      '@context': 'http://schema.org',
      '@type': 'Person',
      'name': 'Julien Valéry',
      'url': 'http://www.darul.io',
      'sameAs': [
        'https://github.com/darul75',
        'https://fr.linkedin.com/pub/julien-valery/70/624/b54',
        'https://twitter.com/darul75'
      ]
    };

    return (
      <div>
        <Header />
        <div className={slideForMenu}>
          <HtmlHeaderTags />
          <div className='main-content'>
            {this.props.children}
          </div>
          <Footer />
        </div>
        <Schema schema={schemaObj} />
      </div>
    );
  }

  static getStores() {
    return [AppStore];
  }

  static getPropsFromStores() {
    return {
      menu: AppStore.getState().menu,
      menuHide: AppStore.getState().menuHide
    };
  }
};

app.prototype.displayName = 'App';

export default connectToStores(app);
