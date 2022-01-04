const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

// create fields/columns for Review model
Review.init(
    {
      reviewId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      book_id: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        references: {
            model: 'book',
            key: 'book_id',
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        // allowNull: false,
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
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
      // updated: {
      //   type: DataTypes.DATE,
      //   // allowNull: false
      //     }
      
      },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'review'
    }
  );
  
module.exports = Review;