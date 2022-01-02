const router = require('express').Router();
const sequelize = require('../config/connection');
const { Review, User, Book } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Review.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'reviewId',
      'created',
      'comment',
      'updated',
    ],
    include: [
    //   {
    //     model: Comment,
    //     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //     include: {
    //       model: User,
    //       attributes: ['username']
    //     }
    //   },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbReviewData => {
      const reviews = dbReviewData.map(review => review.get({ plain: true }));
      res.render('dashboard', { reviews, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Review.findByPk(req.params.id, {
    attributes: [
        'reviewId',
        'created',
        'comment',
        'updated',
    ],
    include: [
    //   {
    //     model: Comment,
    //     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //     include: {
    //       model: User,
    //       attributes: ['username']
    //     }
    //   },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbReviewData => {
      if (dbReviewData) {
        const review = dbReviewData.get({ plain: true });
        
        res.render('edit-review', {
          review,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
