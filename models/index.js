const User = require('./User');
const Review = require('./Review');
const Book = require('./Book');


// User.hasMany( Book, {
//   foreignKey: 'user_id',
// });

User.hasMany( Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Review.belongsTo( User, {
    foreignKey: 'reviewId',
});

Review.belongsTo( Book, {
  foreignKey: 'book_id',
});

// Book.belongsTo( User, {
//   foreignKey: 'book_id',
// });

Book.hasMany( Review, {
  foreignKey: 'book_id',
  onDelete: 'CASCADE'
});


module.exports = { User, Review, Book}; 