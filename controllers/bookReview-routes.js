const router = require('express').Router();
const sequelize = require('../config/connection');
const { Review, User, Book } = require('../models');
// const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/:id', withAuth, (req, res) => {
  // console.log("bookReview-routes.js" + req.session.loggedIn); //Testing
  // console.log('This is ID:  ' + req.params.id);
  // console.log('======================');

  var loggedIn = req.session.loggedIn;

  Review.findAll({
    where: {
      bookId: req.params.id
    },
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
        attributes: ['bookId', 'title', 'author', 'genre']
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
      res.render('bookReview', { reviews , loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});





module.exports = router;
