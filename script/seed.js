'use strict';

const db = require('../server/db');
const {User} = require('../server/db/models');
const {Stock} = require('../server/db/models');

async function seed() {
  await db.sync({force: true});
  console.log('db synced!');

  const users = await Promise.all([
    User.create({
      email: 'DavidRichy@email.com',
      password: 'RichyRich',
      cartId: 4,
      history: [5, 6],
      role: false,
      visits: 0
    }),
    User.create({
      email: 'ShanonSalas@email.com',
      password: '123',
      cartId: 1,
      history: [2, 3],
      role: false,
      visits: 12
    }),
    User.create({
      email: 'BenSari@email.com',
      password: 'I<3Dogs',
      cartId: 7,
      history: [8, 9],
      role: true,
      visits: 35
    }),
    User.create({
      email: 'DannyDevito@email.com',
      password: 'TrashMan',
      cartId: 10,
      history: [11, 12],
      role: false,
      visits: 22
    }),
    User.create({
      email: 'DonnyDarko@email.com',
      password: 'RabbitFear',
      cartId: 13,
      history: [14, 15],
      role: false,
      visits: 66
    })
  ]);

  const stocks = Promise.all([
    Stock.create({
      name: 'Jelly Beans',
      description: 'An American Classic',
      images: '/images/jelly_beans.jpeg',
      quantity: 1000,
      price: 3.99,
      category: 'Jelly Beans',
      averageReview: 4.5,
      brand: 'JB'
    }),
    Stock.create({
      name: 'Cherry Candy',
      description: 'Like a real cherry but better',
      images: '/images/cherry_candy.jpeg',
      quantity: 120,
      price: 4.12,
      category: 'Candy',
      averageReview: 4.2,
      brand: 'Candy Shop'
    }),
    Stock.create({
      name: 'Gummy Bears',
      description: 'Sweetest bears ever ',
      images: '/images/gummy_bears.jpeg',
      quantity: 100,
      price: 2.49,
      category: 'Jelly Beans',
      averageReview: 4.5,
      brand: 'Haribo'
    }),
    Stock.create({
      name: 'Assorted Chocolate',
      description: 'Perfect Halloween Treats',
      images: '/images/halloweentreats.jpeg',
      quantity: 1000,
      price: 11.89,
      category: 'Chocolate',
      averageReview: 4.7,
      brand: 'Nestle'
    }),
    Stock.create({
      name: 'Hard Candies',
      images: '/images/hardcandies.jpeg',
      quantity: 40,
      price: 6.8,
      category: 'Candy',
      averageReview: 4.2,
      brand: 'Candy Shop'
    }),
    Stock.create({
      name: 'Lollipops',
      description: 'Yummy!',
      images: '/images/lollipops.jpeg',
      quantity: 700,
      price: 1.99,
      category: 'Candy',
      averageReview: 5.0,
      brand: 'Candy Shop'
    }),
    Stock.create({
      name: 'M&M',
      description: 'An American Classic',
      images: '/images/mandm.jpeg',
      quantity: 400,
      price: 4.19,
      category: 'Chocolate',
      averageReview: 4.5,
      brand: 'M&M'
    }),
    Stock.create({
      name: 'Pinkle Candy',
      description: 'A South Korean delicacy',
      images: '/images/pinkle_candy.jpeg',
      quantity: 10,
      price: 10.99,
      category: 'Exotic Deserts',
      averageReview: 5.0,
      brand: 'Pinkle'
    }),
    Stock.create({
      name: 'Thai Sweets',
      description: 'A Thai delicacy',
      images: '/images/thai_sweets.jpeg',
      quantity: 10,
      price: 10.99,
      category: 'Exotic Deserts',
      averageReview: 5.0,
      brand: 'Thai'
    }),
    Stock.create({
      name: 'Turkish Delight',
      description: 'A Turkish classic',
      images: '/images/turkish_delight.jpeg',
      quantity: 10,
      price: 10.99,
      category: 'Exotic Deserts',
      averageReview: 5.0,
      brand: 'Lokumcu Baba'
    })
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${stocks.length} stocks`);
  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
