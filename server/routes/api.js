import express from 'express';

/*eslint-disable new-cap*/
let router = express.Router();
/*eslint-enable new-cap*/

let api = require('../api/api');
let sitemap = require('../utils/sitemap');

router.use('/api/*', (req, res, next) => {
  api.todo(req, res, next);
});

router.use('/sitemap.xml', (req, res, next) => {
  sitemap.handle(req, res, next);
});

module.exports = router;
// export default router;

//
// check if HMR is enabled
// --------------------
if(module.hot) {
  module.hot.accept(['../api/api', '../utils/sitemap'], () => {
    api = require('../api/api');
    sitemap = require('../utils/sitemap');
  });
}
