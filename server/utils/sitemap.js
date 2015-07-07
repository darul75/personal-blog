import AppStore from '../../app/stores/AppStore';

let sm = require('sitemap');

let sitemap;

let handler = {
  create: (req, res, next) => {
    // TODO cache
    const posts = AppStore.getState().posts;

    let urls = [];

    posts.forEach(post => {
      let {title: title} = post;

      urls.push({
        url: '/post/'+ title.substring(2, title.indexOf('.md')).toLowerCase(), changefreq: 'monthly', priority: 0.3
      });
    });
    sitemap = sm.createSitemap({
      hostname: 'http://example.com',
      cacheTime: 600000,        // 600 sec - cache purge period
      urls: urls
    });

    try {
      sitemap.toXML((xml) => {
        res.header('Content-Type', 'application/xml');
        res.send( xml );
      });
    }
    catch (err) {
      return next(err);
    }
  }
};

//
// check if HMR is enabled
// --------------------
if(module.hot) {
  module.hot.accept(['../utils/sitemap'], () => {
    console.log('toto');
    sitemap = undefined;
  });
}

export default handler;

/*
var sitemap = sm.createSitemap({ options }); //Creates a sitemap object given the input configuration with URLs
sitemap.toXML( function(xml){ console.log(xml) });) //Generates XML with a callback function
var xml = sitemap.toString(); //Gives you a string containing the XML data*/
