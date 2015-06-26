// LIBRARY
import merge from 'object-assign';

// FLUX
import AppActions from '../actions/AppActions';

// DEPENDENCY
import alt from '../alt';
// webpack hot reload
import makeHot from 'alt/utils/makeHot';

let appStore = makeHot(alt, class AppStore {
  constructor() {
    this.bindActions(AppActions);
    this.dataByRestApi = {};
    this.data = {};
    this.posts = [];
    this.packagejson = require('json!../../package.json');
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
      meta.title = elt.substring(elt.indexOf('_') + 1, elt.indexOf('.md'));

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
  }

  update(id, updates) {
    if(this.data[id] && updates){
      this.data[id] = merge(this.data[id], updates);
    }
  }

  updateAll(updates) {
    for (var id in this.data) {
      this.update(id, updates);
    }
  }

  onCreate(text) {
    text = text.trim();
    if (text === '') {
      return false;
    }
    // hand waving of course.
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this.data[id] = {
      id: id,
      complete: false,
      text: text
    };
  }

  onUpdateText(x) {
    let { id, text } = x;
    text = text ? text.trim() : '';
    if (text === '') {
      return false;
    }
    this.update(id, { text });
  }

  onToggleComplete(id) {
    let complete = !this.data[id].complete;
    this.update(id, { complete });
  }

  onToggleCompleteAll() {
    /*var complete = !todoStore.areAllComplete();
    this.updateAll({ complete });*/
  }

  onDestroy(id) {
    delete this.data[id];
  }

  onDestroyCompleted() {
    for (let id in this.data) {
      if (this.data[id].complete) {
        this.onDestroy(id);
      }
    }
  }

  static areAllComplete() {
    let { data } = this.getState();
    for (let id in data) {
      if (!data[id].complete) {
        return false;
      }
    }
    return true;
  }
}, 'AppStore');

module.exports = appStore;
