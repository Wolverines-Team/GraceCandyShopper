'use strict';

const db = require('../server/db');
const {
  User,
  Stock,
  Address,
  Images,
  Cart,
  CartItems,

  Rating
} = require('../server/db/models');
const Category = require('../server/db/models/categories');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const users = await Promise.all([
    User.create({
      email: 'DavidRichy@email.com',
      username: 'DavidRich',
      password: 'RichyRich',
      // cartId: 4,
      history: [5, 6],
      isAdmin: false,
      visits: 0
    }),
    User.create({
      email: 'ShanonSalas@email.com',
      username: 'ShanonSal',
      password: '123',
      // cartId: 1,
      history: [2, 3],
      isAdmin: false,
      visits: 12
    }),
    User.create({
      email: 'BenSari@email.com',
      username: 'BenSari',
      password: 'I<3Dogs',
      // cartId: 7,
      history: [8, 9],
      isAdmin: true,
      visits: 35
    }),
    User.create({
      email: 'DannyDevito@email.com',
      username: 'DannyO',
      password: 'TrashMan',
      // cartId: 10,
      history: [11, 12],
      isAdmin: false,
      visits: 22
    }),
    User.create({
      email: 'juneidea@gmail.com',
      username: 'juneidea',
      password: 'Rabbit',
      // cartId: 13,
      history: [14, 15],
      isAdmin: true,
      visits: 66
    })
  ]);

  const stocks = await Promise.all([
    Stock.create({
      name: 'Jelly Beans',
      description: 'An American Classic',
      quantity: 1000,
      price: 3.99,
      // categoryId: 'Jelly Beans',
      brand: 'JB'
    }),
    Stock.create({
      name: 'Cherry Candy',
      description: 'Like a real cherry but better',

      quantity: 120,
      price: 4.12,
      category: 'Candy',

      brand: 'Candy Shop'
    }),
    Stock.create({
      name: 'Gummy Bears',
      description: 'Sweetest bears ever ',

      quantity: 100,
      price: 2.49,
      category: 'Jelly Beans',

      brand: 'Haribo'
    }),
    Stock.create({
      name: 'Assorted Chocolate',
      description: 'Perfect Halloween Treats',

      quantity: 1000,
      price: 11.89,
      category: 'Chocolate',

      brand: 'Nestle'
    }),
    Stock.create({
      name: 'Hard Candies',

      quantity: 40,
      price: 6.8,
      category: 'Candy',

      brand: 'Candy Shop'
    }),
    Stock.create({
      name: 'Lollipops',
      description: 'Yummy!',

      quantity: 700,
      price: 1.99,
      category: 'Candy',

      brand: 'Candy Shop'
    }),
    Stock.create({
      name: 'M&M',
      description: 'An American Classic',

      quantity: 400,
      price: 4.19,
      category: 'Chocolate',

      brand: 'M&M'
    }),
    Stock.create({
      name: 'Pinkle Candy',
      description: 'A South Korean delicacy',

      quantity: 10,
      price: 10.99,
      category: 'Exotic Deserts',

      brand: 'Pinkle'
    }),
    Stock.create({
      name: 'Thai Sweets',
      description: 'A Thai delicacy',

      quantity: 10,
      price: 10.99,
      category: 'Exotic Deserts',

      brand: 'Thai'
    }),
    Stock.create({
      name: 'Turkish Delight',
      description: 'A Turkish classic',

      quantity: 10,
      price: 10.99,
      category: 'Exotic Deserts',

      brand: 'Lokumcu Baba'
    })
  ]);

  const address = await Promise.all([
    Address.create({
      userId: 1,
      street: '123 Main St',
      city: 'Oak Park',
      state: 'IL',
      zip: '60301'
    }),
    Address.create({
      userId: 2,
      street: '26 Houghton St',
      city: 'Somerville',
      state: 'MA',
      zip: '02134'
    }),
    Address.create({
      userId: 3,
      street: '130 Second St',
      city: 'Cambridge',
      state: 'MA',
      zip: '02144'
    }),
    Address.create({
      userId: 4,
      street: '145 Lake Street',
      city: 'Chicago',
      state: 'IL',
      zip: '60007'
    }),
    Address.create({
      userId: 5,
      street: '972 5th Ave',
      city: 'New York',
      state: 'NY',
      zip: '10075'
    })
  ]);

  const images = await Promise.all([
    await Images.create({
      imageUrl: '/images/candy01-2.png',
      stockId: 1
    }),
    await Images.create({
      imageUrl: '/images/candy01-1.png',
      stockId: 1
    }),
    await Images.create({
      imageUrl: '/images/candy02-4.png',
      stockId: 2
    }),
    await Images.create({
      imageUrl: '/images/candy02-3.png',
      stockId: 2
    }),
    await Images.create({
      imageUrl: '/images/candy02-2.png',
      stockId: 2
    }),
    await Images.create({
      imageUrl: '/images/candy02-1.png',
      stockId: 2
    }),
    await Images.create({
      imageUrl: '/images/candy03-3.png',
      stockId: 3
    }),
    await Images.create({
      imageUrl: '/images/candy03-2.png',
      stockId: 3
    }),
    await Images.create({
      imageUrl: '/images/candy03-1.png',
      stockId: 3
    }),
    await Images.create({
      imageUrl: '/images/candy04-3.png',
      stockId: 4
    }),
    await Images.create({
      imageUrl: '/images/candy04-2.png',
      stockId: 4
    }),
    await Images.create({
      imageUrl: '/images/candy04-1.png',
      stockId: 4
    }),
    await Images.create({
      imageUrl: '/images/candy05-3.png',
      stockId: 5
    }),
    await Images.create({
      imageUrl: '/images/candy05-2.png',
      stockId: 5
    }),
    await Images.create({
      imageUrl: '/images/candy05-1.png',
      stockId: 5
    }),
    await Images.create({
      imageUrl: '/images/candy06-3.png',
      stockId: 6
    }),
    await Images.create({
      imageUrl: '/images/candy06-2.png',
      stockId: 6
    }),
    await Images.create({
      imageUrl: '/images/candy06-1.png',
      stockId: 6
    }),
    await Images.create({
      imageUrl: '/images/candy07-5.png',
      stockId: 7
    }),
    await Images.create({
      imageUrl: '/images/candy07-4.png',
      stockId: 7
    }),
    await Images.create({
      imageUrl: '/images/candy07-3.png',
      stockId: 7
    }),
    await Images.create({
      imageUrl: '/images/candy07-2.png',
      stockId: 7
    }),
    await Images.create({
      imageUrl: '/images/candy07-1.png',
      stockId: 7
    }),
    await Images.create({
      imageUrl: '/images/candy08-2.png',
      stockId: 8
    }),
    await Images.create({
      imageUrl: '/images/candy08-1.png',
      stockId: 8
    }),
    await Images.create({
      imageUrl: '/images/candy09-3.png',
      stockId: 9
    }),
    await Images.create({
      imageUrl: '/images/candy09-2.png',
      stockId: 9
    }),
    await Images.create({
      imageUrl: '/images/candy09-1.png',
      stockId: 9
    }),
    await Images.create({
      imageUrl: '/images/candy10-3.png',
      stockId: 10
    }),
    await Images.create({
      imageUrl: '/images/candy10-2.png',
      stockId: 10
    }),
    await Images.create({
      imageUrl: '/images/candy10-1.png',
      stockId: 10
    })
  ]);

  const cart = await Promise.all([
    Cart.create({
      stockId: 9,
      userId: 1,
      total_quantity: 12
    }),
    Cart.create({
      stockId: 3,
      userId: 2,
      total_quantity: 3
    }),
    Cart.create({
      stockId: 10,
      userId: 2,
      total_quantity: 2
    }),
    Cart.create({
      stockId: 4,
      userId: 1,
      total_quantity: 20
    })
  ]);

  const cartItems = await Promise.all([
    CartItems.create({
      cartId: 1,
      quantity: 12,
      stockId: 9
    }),
    CartItems.create({
      cartId: 2,
      quantity: 3,
      stockId: 3
    }),
    CartItems.create({
      cartId: 1,
      quantity: 2,
      stockId: 10
    }),
    CartItems.create({
      cartId: 2,
      quantity: 20,
      stockId: 4
    })
  ]);

  const ratings = await Promise.all([
    Rating.create({
      userId: 1,
      stockId: 10,
      rating_num: 5,
      review_text: 'It is great, so tasty'
    }),
    Rating.create({
      userId: 3,
      stockId: 1,
      rating_num: 5,
      review_text: 'Yummmy!'
    }),
    Rating.create({
      userId: 2,
      stockId: 9,
      rating_num: 5,
      review_text: 'It is great, so tasty!'
    })
  ]);

  const categories = await Promise.all([
    Category.create({
      category_name: 'Candy'
      // stockId: 1
    }),
    Category.create({
      category_name: 'Jelly Beans'
      // stockId: 2
    }),
    Category.create({
      category_name: 'Chocolate'
      // stockId: 3
    }),
    Category.create({
      category_name: 'Exocit Desserts'
      // stockId: 4
    })
  ]);

  const historyItems = await Promise.all([
    HistoryItems.create({
      cart_id: 1,
      stock_id: 1,
      quantity: 13,
      historical_price: 10
    })
  ]);
  console.log('===================HISTORYITEMS++++++ ', historyItems);

  // console.log('====MAGIC METHODS====>', Object.keys(stocks[0].__proto__))

  const stockCategory = await Promise.all([
    await stocks[0].addCategory(categories[1]),
    await stocks[1].addCategory(categories[0]),
    await stocks[2].addCategory(categories[1]),
    await stocks[3].addCategory(categories[2]),
    await stocks[4].addCategory(categories[0]),
    await stocks[5].addCategory(categories[0]),
    await stocks[6].addCategory(categories[2]),
    await stocks[7].addCategory(categories[3]),
    await stocks[8].addCategory(categories[3]),
    await stocks[9].addCategory(categories[3])
  ]);

  console.log('==========>>Stock Category Join==> ', stockCategory);
  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${stocks.length} stocks`);
  console.log(`seeded ${address.length} address`);
  console.log(`seeded ${images.length} images`);
  console.log(`seeded ${cart.length} cart`);
  console.log(`seeded ${cartItems.length} cart items`);
  console.log(`seeded ${ratings.length} ratings`);
  console.log(`seeded ${categories.length} categories`);
  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
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
