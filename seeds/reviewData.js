const { Review } = require('../models'); 

const reviewData = [
    {
        reviewId: '1',
        bookId: '49',
        userId: '8',
        comment: 'My Favorite Book!!',
        created: 'December 21, 2021 22:09:00',
        updated: 'December 21, 2021 22:09:00'
    },
    {
        reviewId: '2',
        bookId: '10',
        userId: '3',
        comment: 'I did not like this book at all',
        created: 'December 11, 2021 11:09:00',
        updated: 'December 21, 2021 22:09:00'
    },
    {
        reviewId: '3',
        bookId: '32',
        userId: '10',
        comment: 'Must Read',
        created: 'April 7, 2021 07:07:00',
        updated: 'May 21, 2021 22:09:00'
    },
    {
        reviewId: '4',
        bookId: '16',
        userId: '4',
        comment: 'I loved the Alians in this book',
        created: 'October 31, 2021 06:06:06',
        updated: 'November 21, 2021 22:09:00'
    },
];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;