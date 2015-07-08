import AppStore from '../../app/stores/AppStore';

let sm = require('sitemap');

let sitemap;

let handler = {
  handle: (req, res, next) => {
    // TODO cache
    const posts = AppStore.getState().posts;

    let urls = [{url: '/', changefreq: 'monthly', priority: 1.0}];

    posts.forEach(post => {
      let {title, permalink} = post;

      console.log(permalink);

      urls.push({
        url: '/post/' + permalink, changefreq: 'monthly', priority: 0.5
      });
    });
    sitemap = sm.createSitemap({
      hostname: 'http://www.darul.io',
      cacheTime: 600000,
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

export default handler;
