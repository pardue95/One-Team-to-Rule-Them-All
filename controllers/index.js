const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard-routes.js');
const bookReviewRoutes = require('./bookReview-routes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/bookReview', bookReviewRoutes);


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;