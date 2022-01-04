const router = require('express').Router();
const sequelize = require('../config/connection');
const { Review, User, Book } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/:id', withAuth, (req, res) => {
  // console.log("bookReview-routes.js" + req.session.loggedIn); //Testing
  // console.log('This is ID:  ' + req.params.id);
  // console.log('======================');

  var loggedIn = req.session.loggedIn;
  var bookId = req.params.id;
  

  Review.findAll({
    where: {
      book_id: req.params.id
    },
    attributes: [
        'reviewId',
        'book_id',
        'userId',
        'comment',
        'created',
        'updated',
    ],
    include: [
      {
        model: Book,
        attributes: ['book_id', 'title', 'author', 'genre']
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
      res.render('bookReview', { reviews , loggedIn, bookId });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/api/review', withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  console.log("Inside Post Review"); //Testing
  Review.create({

    book_id: req.body.bookId,
    userId: req.body.userId,
    comment: req.body.comment

  })
    .then(dbReviewData => res.json(dbReviewData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});





module.exports = router;
