const User = require('./User');
const Review = require('./Review');
// User.hasMany(Books, {
//   foreignKey: 'user_id'
// });

User.hasMany( Review, {
  foreignKey: 'user_id'
});

Review.belongsTo(User, {
    foreignKey: 'reviewId'
})


module.exports = { User, Review}; 