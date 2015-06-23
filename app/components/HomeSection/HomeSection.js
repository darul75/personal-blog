// LIBRARY
import React from 'react';

// FLUX
import AppStore from '../../stores/AppStore';
import connectToStores from 'alt/utils/connectToStores';

// COMPONENT
import PostItem from '../Post/PostItem';

if (process.env.BROWSER) {
  require('./_HomeSection.scss');
}

// http://webpack.github.io/docs/context.html
let markupFilesReq = require.context('../../../posts/2015', true, /^\.\/.*\.md$/);
let markupFilesKeys = markupFilesReq.keys();
let articles = [];

const extractMeta = function(elt) {
  let meta = {};
  var dateMatches = elt.match(/(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])/);
  if (dateMatches) {
    meta.date = dateMatches[0];
  }

  meta.permalink = elt.substring(2, elt.indexOf('.md')).toLowerCase();
  meta.title = elt.substring(elt.indexOf('_') + 1, elt.indexOf('.md'));

  return meta;
};

markupFilesKeys.forEach((elt) => {
  let html = markupFilesReq(elt);
  let metas = extractMeta(elt);
  let post = {
    body: html,
    date: metas.date,
    title: metas.title,
    permalink: metas.permalink
  };
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
        <div className='wrapper'>
          {postItems}
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
