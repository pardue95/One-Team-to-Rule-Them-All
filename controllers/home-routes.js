const { Review, User, Book} = require('../models');
const router = require('express').Router();
const sequelize = require('../config/connection');


router.get('/', (req, res) => {
  console.log('======================');  //For Testing
  Book.findAll({
    attributes: [
      'book_id',
      'title',
      'author',
      'genre',
    ]
    
  })
    
  .then(dbBookData => {
    const books = dbBookData.map(book => book.get({ plain: true }));

    res.render('homepage', {
      books,
      loggedIn: req.session.loggedIn
    });
  })
  

  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/login', (req, res) => {
  console.log(req.session.loggedIn); //Testing
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