const sequelize = require('../config/connection');
const seedBook = require('./bookData');
const seedReview = require('./reviewData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBook();

  await seedUser();

  await seedReview();

  process.exit(0);
};

seedAll();