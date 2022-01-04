const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init (
    {
    bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
// },
    // user_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: 'user',
    //         key: 'id',
    //     }
// },
//         reviewId: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
            // references: {
            //   model: 'review',
            //   key: 'id'
            // }
},
    author: {
        type: DataTypes.STRING,
        allowNull: false,
},
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'book'
      }
);

module.exports = Book;