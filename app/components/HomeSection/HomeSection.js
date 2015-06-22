// LIBRARY
import React from 'react';

// FLUX
import AppStore from '../../stores/AppStore';
import HomeSectionActions from './HomeSectionActions';
import connectToStores from 'alt/utils/connectToStores';

// COMPONENT
import Aside from '../Aside/Aside';
import PostItem from '../Post/PostItem';

if (process.env.BROWSER) {
  require('./_HomeSection.scss');
}

// http://webpack.github.io/docs/context.html
let markupFilesReq = require.context('../../../posts/2015', true, /^\.\/.*\.md$/);
let markupFilesKeys = markupFilesReq.keys();
let articles = [];

markupFilesKeys.forEach((elt) => {
  let html = markupFilesReq(elt);
  let post = {title: html};
  articles.push(post);
  console.log(html);
});

let homeSection = class HomeSection extends React.Component {
  constructor() {
    super();
  }

  render() {
    // retrieve data from store
    //let storeProps = HomeSection.getPropsFromStores();

    // var html = require('./test.md');
    // console.log(html);

    // generate todo item list
    var postItems = [];
    for (var key in articles) {
      postItems.push(<PostItem key={key} post={articles[key]} />);
    }

    return (
      <div>
        <Aside />
        <div className='wrapper'>
          <h1>HOME PAGE</h1>
          {postItems}
          <HomeSectionActions />
        </div>
      </div>
    );
  }

  static getStores() {
    return [AppStore];
  }

  static getPropsFromStores() {
    return {
      apiData: AppStore.getState().dataByRestApi
    };
  }
};

homeSection.prototype.displayName = 'HomeSection';

export default connectToStores(homeSection);
