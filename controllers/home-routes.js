const { Review, User} = require('../models');
const router = require('express').Router();
const sequelize = require('../config/connection');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Review.findAll({
    attributes: [
      'reviewId',
      'title',
      'author',
      'genre'
    ],
    include: [
      // {
      //   model: Comment,
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
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));

      res.render('homepage', {
        posts,
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

// router.post('/logout', withAuth, (req, res) => {
//   if (req.session.loggedIn) {
//       req.session.destroy(() => {
//           res.status(204).end();
//       });
//   } else {
//       res.status(404).end();
//   }
// });

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