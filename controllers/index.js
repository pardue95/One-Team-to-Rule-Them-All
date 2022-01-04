const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const bookReviewRoutes = require('./bookReview-routes.js');

router.use('/', homeRoutes);
router.use('/bookReview', bookReviewRoutes);
router.use('/api', apiRoutes);


module.exports = router;