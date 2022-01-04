const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Review, User, Book } = require('../../models');
const withAuth = require('../../utils/auth');

// get all reviews
router.get('/', (req, res) => {
  Review.findAll({
    attributes: [
      'reviewId',
      'bookId',
      'userId',
      'reviews',
      'created',
      'updated',
    ],
    include: [
      // {
      //   model: Book,
      //   attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
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
      res.render('dashboard', { reviews, loggedIn: true });
    })
    //.then(dbReviewData => res.json(dbReviewData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Review.findOne({
    where: {
      reviewId: req.params.id
    },
    attributes: [
        'reviewId',
        'book_id',
        'userId',
        'reviews',
        'created',
        'updated'
    ],
    include: [
      // {
      //   model: Book,
      //   attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
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
      if (!dbReviewData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbReviewData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/review', withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  console.log("Inside Post Review"); //Testing
  Review.create({

    book_id: req.body.book_id,
    userId: req.session.userId

  })
    .then(dbReviewData => res.json(dbReviewData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Review.update(
      req.body,
    {
      where: {
        reviewId: req.params.id
      }
    }
  )
    .then(dbReviewData => {
      if (!dbReviewData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbReviewData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Review.destroy({
    where: {
      reviewId: req.params.id
    }
  })
    .then(dbReviewData => {
      if (!dbReviewData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbReviewData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
