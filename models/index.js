const User = require('./User');
const Review = require('./Review');
const Book = require('./Book');


User.hasMany( Book, {
  foreignKey: 'user_id',
});

User.hasMany( Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Review.belongsTo( User, {
    foreignKey: 'reviewId',
});

Review.belongsTo( Book, {
  foreignKey: 'reviewId',
});

Book.belongsToMany( User, {
  foreignKey: 'bookId',
});

Book.hasMany( Review, {
  foreignKey: 'bookId',
  onDelete: 'CASCADE'
});


module.exports = { User, Review, Book}; 