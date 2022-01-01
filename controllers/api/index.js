const router = require('express').Router();

const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');
const bookRoutes = require('./book-routes');

router.use('/users', userRoutes);
router.use('/review', reviewRoutes);
router.use('/book', bookRoutes);

module.exports = router;