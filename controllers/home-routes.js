const { Review, User, Book} = require('../models');
const router = require('express').Router();
const sequelize = require('../config/connection');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');  //For Testing
  Review.findAll({
    attributes: [
      'reviewId',
      'bookId',
      'userId',
      'comment',
      'created',
      'updated',
    ],
    include: [
      // {
      //   model: Review,
      //   attributes: ['reviewId', 'bookId', 'userId', 'comment', 'created', 'updated'],
      //   include: {
      //     model: User,
      //     attributes: ['username']
      //   }
      // },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    
    .then(dbReviewData => {
      const reviews = dbReviewData.map(review => review.get({ plain: true }));

      res.render('homepage', {
        reviews,
        loggedIn: req.session.loggedIn
      });
    })
  
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


router.get('/post/:id', (req, res) => {
  const review = {
    reviewId: 1,
    title: 'Handlebars Docs',
    author: 'Testing',
    genre: 'Test',    
    user: {
      username: 'test_user'
    }
  };

  res.render('single-review', { review });
});



module.exports = router;