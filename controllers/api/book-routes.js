const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Review, User, Book } = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Book.findAll({
    attributes: [
      'book_id',
      'title',
      'author',
      'genre',
    ],
    include: [
      {
        model: Review,
        attributes: ['reviewId', 'book_id', 'user_id', 'comment', 'created', 'updated'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
    //   {
    //     model: User,
    //     attributes: ['username']
    //   }
    ]
  })
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Book.findOne({
    where: {
      book_id: req.params.id
    },
    attributes: [
        'book_id',
        'title',
        'author',
        'genre',
    ],
    include: [
        {
            model: Review,
            attributes: ['reviewId', 'book_id', 'user_id', 'comment', 'created', 'updated'],
            include: {
                model: User,
                attributes: ['username']
            }
          },
    //   {
    //     model: User,
    //     attributes: ['username']
    //   }
    ]
  })
    .then(dbBookData => {
      if (!dbBookData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbBookData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  Book.create({
    book_id: req.body.book_id,
    userId: req.session.userId
  })
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Book.update(
      req.body,
    {
      where: {
        book_id: req.params.id
      }
    }
  )
    .then(dbBookData => {
      if (!dbBookData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbBookData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Book.destroy({
    where: {
      book_id: req.params.id
    }
  })
    .then(dbBookData => {
      if (!dbBookData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbBookData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
