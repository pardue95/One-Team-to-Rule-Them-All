const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}
// {
//     static upvote(body, models) {
//         return models.Vote.create({
//           user_id: body.user_id,
//           post_id: body.post_id
//         }).then(() => {
//           return Review.findOne({
//             where: {
//               id: body.post_id
//             },
//             attributes: [
//                 'review_id',
//                 'book_id',
//                 'user_id',
//                 'comment_text',
//                 'created_at',
//                 'updated_at'
//               [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
//             ],
//             include: [
//               {
//                 model: models.Book,
//                 attributes: ['book_id', 'title', 'author', 'genre'],
//                 include: {
//                   model: models.User,
//                   attributes: ['username']
//                 }
//               }
//             ]
//           });
//         });
//       }
// }

// create fields/columns for Review model
Review.init(
    {
      reviewId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'book',
            key: 'id',
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        }
      },
      comment: {
        type: DataTypes.STRING
      },
      created: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated: {
        type: DataTypes.DATE,
        allowNull: false
          }
      },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );
  
module.exports = Review;