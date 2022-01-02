const router = require('express').Router();
const sequelize = require('../config/connection');
const { Review, User, Book } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/:id', (req, res) => {
  console.log(req.session);
  console.log('======================');
  Review.findAll({
    // where: {
    //   id: req.params.id
    // },
    attributes: [
        'reviewId',
        'bookId',
        'userId',
        'comment',
        'created',
        'updated',
    ],
    include: [
      {
        model: Book,
        attributes: ['bookId', 'title', 'author', 'genre'],
        // include: {
        //   model: User,
        //   attributes: ['username']
        // }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbReviewData => {
      const reviews = dbReviewData.map(review => review.get({ plain: true }));
      console.log(reviews);
      res.render('bookReview', { reviews });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;
