// FLUX
import AppActions from '../actions/AppActions';

// DEPENDENCY
import alt from '../alt';
// webpack hot reload
import makeHot from 'alt/utils/makeHot';

let appStore = makeHot(alt, class AppStore {
  constructor() {
    this.bindActions(AppActions);
    this.posts = [];
    this.packagejson = require('../../package.json');
    this.config = require('../../assets/config.json');
    this.init();
  }

  init() {
    // http://webpack.github.io/docs/context.html
    let markupFilesReq = require.context('../../posts/2015', true, /^\.\/.*\.md$/);
    let markupFilesKeys = markupFilesReq.keys();

    const extractMeta = function(elt) {
      let meta = {};
      var dateMatches = elt.match(/(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])/);
      if (dateMatches) {
        meta.date = dateMatches[0];
      }

      meta.filename = elt.substring(2, elt.length);
      meta.permalink = elt.substring(2, elt.indexOf('.md')).toLowerCase();
      meta.title = elt.substring(elt.indexOf('_') + 1, elt.indexOf('.md')).replace(/\-/g, ' ');

      return meta;
    };

    markupFilesKeys.forEach((elt) => {
      let html = markupFilesReq(elt);
      let metas = extractMeta(elt);
      let post = {
        body: html,
        date: metas.date,
        filename: metas.filename,
        permalink: metas.permalink,
        title: metas.title
      };
      this.posts.push(post);
    });

    this.posts.reverse();
  }
}, 'AppStore');

module.exports = appStore;
