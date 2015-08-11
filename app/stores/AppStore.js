// FLUX
import AppActions from '../actions/AppActions';

// DEPENDENCY
import alt from '../alt';
import htmlparser from 'htmlparser2';

// webpack hot reload
import makeHot from 'alt/utils/makeHot';

let parserFactory = function(html) {
  var util = {
    html: html,
    newHtml: ''
  };

  util.process = function() {
    let newHtml = '',
        limit = 1,
        count = 0,
        skip = false;

    const p = new htmlparser.Parser({
      onopentag: function(name, attribs){
        skip = name === 'img';
        if (count > limit || skip){
          return;
        }
        let attr = ' ';
        for (var key in attribs) {
          attr += key + '="' + attribs[key] + '"';
        }
        newHtml += '<' + name + attr + '>';
      },
      ontext: function(text){
        if (count > limit || skip){
          return;
        }
        newHtml += text;
      },
      onclosetag: function(tagname){
        if (count > limit || skip){
          return;
        }
        newHtml += '</' + tagname + '>';
        count++;
      },
      onend: function() {
        util.newHtml = newHtml;
      }
    }, {decodeEntities: false});

    p.write(this.html);
    p.end();
  };

  return util;
};

let appStore = makeHot(alt, class AppStore {
  constructor() {
    this.bindActions(AppActions);
    this.posts = [];
    this.menu = false;
    this.menuHide = false;
    this.packagejson = require('../../package.json');
    this.config = require('../../assets/config.json');
    this.init();
  }

  init() {
    // http://webpack.github.io/docs/context.html
    let markupFilesReq = require.context('../../posts/2015', true, /^\.\/.*\.md$/);
    let markupFilesKeys = markupFilesReq.keys();

    const imgRegExp = /(\/.+\w+.(png|jpg))/;
    //const imgTagRegExp = /<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/;

    const extractMeta = function(elt) {
      let meta = {};
      let dateMatches = elt.match(/(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])/);
      if (dateMatches) {
        meta.date = dateMatches[0];
      }

      meta.filename = elt.substring(2, elt.length);
      meta.permalink = elt.substring(2, elt.indexOf('.md')).toLowerCase();
      meta.title = elt.substring(elt.indexOf('_') + 1, elt.indexOf('.md')).replace(/\-/g, ' ');

      return meta;
    };

    markupFilesKeys.forEach((elt) => {
      let img = '';
      // bodyCleaned = '';
      let html = markupFilesReq(elt);
      const parser = parserFactory(html.replace(/[\n\r]/g, ''));
      parser.process();

      // fetch first paragraph
      /*let paraMatches = html.match(imgTagRegExp);
      if (paraMatches) {
        bodyCleaned = html.replace(paraMatches[0], '');
      }*/
      // fetch image
      let imageMatches = html.match(imgRegExp);
      if (imageMatches) {
        img = this.packagejson.author.url + imageMatches[0];
      }
      let metas = extractMeta(elt);
      let post = {
        body: html,
        bodyNoImg: parser.newHtml,
        bodyImage: img,
        date: metas.date,
        filename: metas.filename,
        permalink: metas.permalink,
        title: metas.title
      };
      this.posts.push(post);
    });

    this.posts.reverse();
  }

  onHidePostMenu(hide) {
    this.setState({
      menuHide: hide
    });
  }

  onShowPostMenu(show) {
    this.setState({
      menu: show,
      menuHide: false
    });
  }
}, 'AppStore');

module.exports = appStore;
