const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Review, User } = require('../../models');
const withAuth = require('../../utils/auth');

//get all users
router.get('/all', (req, res) => {
  Review.findAll({
    attributes: [
      'reviewId',
      'book_id',
      'user_id',
      'comment',
      // 'created',
      // 'updated',
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
    .then(dbReviewData => res.json(dbReviewData))
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
        'user_id',
        'comment',
        // 'created',
        // 'updated'
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

router.post('/add', (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  console.log("Inside Post Review"); //Testing
  console.log(req.body)
  Review.create({
    book_id: req.body.book_id,
    user_id: req.session.user_id,
    comment: req.body.comment,
    // created: req.body.created,
    // updated: req.body.updated

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
        reviewId: req.params.reviewId
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
