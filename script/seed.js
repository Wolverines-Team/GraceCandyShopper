'use strict';

const db = require('../server/db');
const {
  User,
  Stock,
  Address,
  Images,
  Cart,
  CartItems,
  Order,
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
    await Stock.create({
      name: 'Whirly Pop',
      description:
        'Who rules the WHIRL? Wolverine’s Candy Bar does! Enjoy every lick of this sweet classic or give it as an easy and enticing gift!',
      quantity: 500,
      price: 3.75
    }),
    await Stock.create({
      name: 'Candy Bar Signature Box',
      description:
        'No one does signature sweeter than us! This exclusive Wolverine Candy Bar tackle box is stuffed full of delicious sweet and sour treats. Featuring a colorful blend of favorites',
      quantity: 40,
      price: 26.0
    }),
    await Stock.create({
      name: 'Sour Gummies Signature Box',
      description:
        'Pucker up and feel the power of sour! Our tart candy experts curated this tackle box specifically to keep sour lovers chasing that flavor to the last bite.',
      quantity: 40,
      price: 26.0
    }),
    await Stock.create({
      name: 'White Chocolate Cupcake',
      description:
        'Creamy, dreamy and crunch-tastic! This cupcake container is stuffed with our addicting White Chocolate Sprinkled Pretzel Balls. Once you start munching, ya can not stop!',
      quantity: 50,
      price: 28.0
    }),
    await Stock.create({
      name: 'Aquatic Gummies Paint Can',
      description:
        'They’re cute, they’re colorful and they’re most definitely delicious! Dive into an ocean of flavor with this adorable Aquatic Gummy paint can!',
      quantity: 40,
      price: 17.0
    }),
    await Stock.create({
      name: 'Rainbow Sour Belts Paint Can',
      description:
        'Come on, belt it out! This signature paint can is stuffed with delicious Rainbow Sour Belts, an absolute favorite of ours. Buckle your belt for a yummy ride!',
      quantity: 60,
      price: 17.0
    }),
    await Stock.create({
      name: 'Mini Neon Sour Worms Soda Can',
      description:
        'It’s time to squirm, it’s time for worms! Pop open this signature can, and wiggle on in. Hey, these worms are neon, they’re sour, and they’ve got super candy power!',
      quantity: 80,
      price: 12.0
    }),
    await Stock.create({
      name: 'Signature Lollipops Wheel',
      description:
        'Wheel features the following flavors: Strawberry-Banana, Cherry, Blueberry, Gumball, Orange, Apple, Watermelon, Banana Split and Cotton Candy!',
      quantity: 40,
      price: 12.0
    }),
    await Stock.create({
      name: 'Junk Food Gummies Pouch',
      description:
        'We’re calling this a total slam JUNK! We’ve got juuuust the mix-clusive for when you’re feeling hangry. Filled with Gummy Pizza, Gummy Fried Eggs, Gummy Hot Dogs, Gummy Burgers and Gummy Cola.',
      quantity: 50,
      price: 7.5
    }),
    await Stock.create({
      name: 'Bake Shoppe Saltwater Taffy',
      description:
        'The heavenly taste of freshly baked goods in bite-size taffy bliss! In classic bakery flavors like Key Lime Pie, Cinnamon Roll, Red Velvet Cake and more, this saltwater taffy gives you a happy, comforting feeling every time.',
      quantity: 30,
      price: 14.0
    }),
    await Stock.create({
      name: 'Blueberry Secret Message Lollipop',
      description:
        'It’s what’s on the inside that counts - especially when it’s a sweet surprise! Our novelty Secret Message Lollipops come in 12 mouthwatering flavors and contain a hidden message inside the stick',
      quantity: 30,
      price: 3.0
    }),
    await Stock.create({
      name: 'Soda Fountain Saltwater Taffy',
      description:
        'Feeling nostalgic for a simpler time? Our Soda Fountain Taffy Mix turns charming, old-fashioned drinks like Chocolate Egg Creams and Cherry Cola into fluffy taffy for a fun and shareable tasting experience.',
      quantity: 40,
      price: 14.0
    }),
    await Stock.create({
      name: 'Unicorn Saltwater Taffy',
      description:
        'It’s a candy double whammy! Beloved flavors like Cotton Candy, Red Licorice and Marshmallow are fused with chewy taffy morsels for a truly unique assortment that’ll WOW the crazy candy lover.',
      quantity: 30,
      price: 14.0
    }),
    await Stock.create({
      name: 'Sour Belt Signature Box',
      description:
        'Buckle down, sour fans, we’ve got a tangle of candy belts comin’ your way! Contains Sour Rainbow Belts, Green Apple Sour Belts, Watermelon Belts, Berry Blue Belts, Pink Lemonade Belts, Cotton Candy Belts and Wild Cherry Belts.',
      quantity: 30,
      price: 26.0
    }),
    await Stock.create({
      name: 'Farmer Market Signature Box',
      description:
        'The best the farmers market has to offer. Filled to the brim with farm fresh favorites. Contains Strawberry & Cream Gummies, Sour Gummy Cherries, Gummy Peaches, Gummy Watermelons, Sour Patch® Apples & Sour Patch® Fruit Salad.',
      quantity: 30,
      price: 26.0
    }),
    await Stock.create({
      name: 'Unbearable Paint Can',
      description:
        'This paint can is so impawsibly addicting, it’s almost unbearable! Experience it for yourself and don’t say we didn’t warn you! Filled with Mini Gummy Bears, Fruit Flavored Gummy Bears and Giant Gummy Bears.',
      quantity: 30,
      price: 17.0
    }),
    await Stock.create({
      name: 'Go Fishing Paint Can',
      description:
        'Put some yummy gummy in your tummy, right here, right now! Gummy overload? No such thing! Filled with Mini Gummy Bears, Peach Rings, assorted Swedish Fish® and Gummy Cherries.',
      quantity: 30,
      price: 17.0
    }),
    await Stock.create({
      name: 'Pucker Up Paint Can',
      description:
        'Pucker Up paint can provides sour junkies with the tangy thrill they’re after. Filled with Sour Patch® Watermelon Slices, Mini Neon Worms, and Rainbow Sour Belts.',
      quantity: 30,
      price: 17.0
    }),
    await Stock.create({
      name: 'Gummy Cola Soda Can',
      description:
        'No troubles when you have the taste of soda bubbles! In gummy incarnation, that is. Wow, it’s soda bottles in a soda can…wrap your head around that, candy lover!',
      quantity: 30,
      price: 12.0
    }),
    await Stock.create({
      name: 'Mini Bear Soda Can',
      description:
        'The more, the bearier! Packed with fresh flavor, these fruity Rainbow Gummy Bear Cubs are a delightful itty-bitty treat. Wake up from your hibernation, these are so delicious, we can bear-ly stand it!',
      quantity: 30,
      price: 12.0
    }),
    await Stock.create({
      name: 'Swedish Fish Soda Can',
      description:
        'Oh, go fish! Right now. Hey, have your fish wherever and whenever you like, with a pop of a soda can top! The gummy fish is delish, ya’ know?',
      quantity: 30,
      price: 12.0
    }),
    await Stock.create({
      name: 'Super Sour Candy Pouch',
      description:
        'signature mix-clusive, always at the ready to satisfy your midday cravings. Filled with Sour Stars, Sour Twists, Sour Smiles, Sour Bigfoots, and Rainbow Sour Belts.',
      quantity: 30,
      price: 7.5
    }),
    await Stock.create({
      name: 'Chocolate Bakery Mix Cupcake',
      description:
        'For the ones who eat with their eyes…our cupcake container with Mini Milk Chocolate Sandwich Cookies and Chocolate Covered Cookie Dough Bites is the ultimate bakery mix for the ultimate sweet lover!',
      quantity: 30,
      price: 28.0
    }),
    await Stock.create({
      name: 'Chocolate Bar Assorted 18 Pack',
      description:
        'In the mood for some samples? Our assortment of 18 chocolate squares is the perfect portion of dessert and comes in delicious flavors, including Caramel, Smores, Cookies ‘N Cream, Toffee Crunch and more!',
      quantity: 30,
      price: 15.0
    }),
    await Stock.create({
      name: 'Signature Chocolate Wheel',
      description:
        'Our signature chocolate wheel showcases 56 squares of premium Belgian chocolate in color-coded flavors: Dark Raspberry, Smores, Milk Toffee Crunch, Hazelnut, Dark Espresso, Almond, Caramel, and Milk.',
      quantity: 30,
      price: 45.0
    }),
    await Stock.create({
      name: 'Chocolate Bar Assorted 10 Pack',
      description:
        'Chocolate bars, crafted from rich, tempting Belgian chocolate. Wrapped in vibrant, cheery colors for a delightful gift display, this pack includes: Dark, Hazelnut, Milk, Milk Almond, Peanut Butter & Jelly, Smores, Cookies and Cream, Dark Mint, Caramel and Toffee Crunch.',
      quantity: 30,
      price: 28.0
    }),
    await Stock.create({
      name: 'Cookie Dough Good-To-Go Delight',
      description:
        'What is the best part about baking cookies? Eating the dough, of course! From chocolate to peanut butter, we have packed the best batters into these bites - no oven required',
      quantity: 30,
      price: 10.0
    }),
    await Stock.create({
      name: 'Cookie Bite Bliss Good-To-Go',
      description:
        'We have got the best of both worlds right in this bag - bite-sized, classic sandwich cookies smothered in heavenly milk chocolate! Make way for these treats with a super tasty twist.',
      quantity: 30,
      price: 10.0
    }),
    await Stock.create({
      name: 'Valentine Day Signature Box',
      description:
        'Hooked on someone this Valentine’s Day? Show them how much with this kaleidoscopic tackle box filled with foiled chocolate hearts, gummy lips and more, great for gifting and sharing.',
      quantity: 30,
      price: 26.0
    }),
    await Stock.create({
      name: 'The Perfect Man',
      description:
        'He is sweet and decadently rich, just how a man ought to be! Invite this solid milk chocolate man into your life this Valentine Day, decorated with heart-dotted boxer shorts.',
      quantity: 30,
      price: 9.0
    }),
    await Stock.create({
      name: 'Seal With A Kiss',
      description:
        'Our mini apothecary jar is ‘sealed with a kiss’ this year for Valentine’s Day! Filled with sour gummy lips and pink, red and white mellowcreme hearts, it’s like it was handpicked by Cupid himself.',
      quantity: 30,
      price: 10.0
    }),
    await Stock.create({
      name: 'Gotham Goodies',
      description:
        'It’s quintessential New York cuisine in delicious candy form! Green Apple Gummies, Gummy Hot Dogs and Chocolate-Covered Pretzels are the most fun group of goodies for the ones who want a taste of NYC.',
      quantity: 30,
      price: 15.0
    }),
    await Stock.create({
      name: 'New York Chocolate Squares',
      description:
        'Any NYC lover will get a kick out of this 12 piece chocolate square pack featuring beloved icons of the city. Milk chocolate and dark chocolate squares surround our delicious milk chocolate pretzel bar for a perfect New York gift.',
      quantity: 30,
      price: 16.0
    }),
    await Stock.create({
      name: 'Chi-Town Treats',
      description:
        'The Bears, hot dogs and The Bean are all Chicago essentials…luckily you can experience them all as totally chewy, satisfying candy. Gummy Bears, Gummy Hot Dogs and Sour Gummy Beans make up this delicious shareable assortment.',
      quantity: 30,
      price: 15.0
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
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy01-1.png',
      stockId: 1
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy01-2.png',
      stockId: 1
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy02-1.png',
      stockId: 2
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy02-2.png',
      stockId: 2
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy02-3.png',
      stockId: 2
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy02-4.png',
      stockId: 2
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy03-1.png',
      stockId: 3
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy03-2.png',
      stockId: 3
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy03-3.png',
      stockId: 3
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy04-1.png',
      stockId: 4
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy04-2.png',
      stockId: 4
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy04-3.png',
      stockId: 4
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy05-1.png',
      stockId: 5
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy05-2.png',
      stockId: 5
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy05-3.png',
      stockId: 5
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy06-1.png',
      stockId: 6
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy06-2.png',
      stockId: 6
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy06-3.png',
      stockId: 6
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy07-1.png',
      stockId: 7
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy07-2.png',
      stockId: 7
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy07-3.png',
      stockId: 7
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy07-4.png',
      stockId: 7
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy07-5.png',
      stockId: 7
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy08-1.png',
      stockId: 8
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy08-2.png',
      stockId: 8
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy09-3.png',
      stockId: 9
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy09-2.png',
      stockId: 9
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy09-1.png',
      stockId: 9
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy10-1.png',
      stockId: 10
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy10-2.png',
      stockId: 10
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy10-3.png',
      stockId: 10
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy11-1.png',
      stockId: 11
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy11-2.png',
      stockId: 11
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy11-3.png',
      stockId: 11
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy12-1.png',
      stockId: 12
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy12-2.png',
      stockId: 12
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy12-3.png',
      stockId: 12
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy13-1.png',
      stockId: 13
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy13-2.png',
      stockId: 13
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy13-3.png',
      stockId: 13
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy14-1.png',
      stockId: 14
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy14-2.png',
      stockId: 14
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy14-3.png',
      stockId: 14
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy15-1.png',
      stockId: 15
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy15-2.png',
      stockId: 15
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy15-3.png',
      stockId: 15
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy16-1.png',
      stockId: 16
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy16-2.png',
      stockId: 16
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy16-3.png',
      stockId: 16
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy17-1.png',
      stockId: 17
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy17-2.png',
      stockId: 17
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy18-1.png',
      stockId: 18
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy18-2.png',
      stockId: 18
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy19-1.png',
      stockId: 19
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy19-2.png',
      stockId: 19
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy19-3.png',
      stockId: 19
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy19-4.png',
      stockId: 19
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy20-1.png',
      stockId: 20
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy20-2.png',
      stockId: 20
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy20-3.png',
      stockId: 20
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy20-4.png',
      stockId: 20
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy21-1.png',
      stockId: 21
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy21-2.png',
      stockId: 21
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy21-3.png',
      stockId: 21
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy21-4.png',
      stockId: 21
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy22-1.png',
      stockId: 22
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy22-2.png',
      stockId: 22
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy22-3.png',
      stockId: 22
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy23-1.png',
      stockId: 23
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy23-2.png',
      stockId: 23
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy23-3.png',
      stockId: 23
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy24-1.png',
      stockId: 24
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy24-2.png',
      stockId: 24
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy25-1.png',
      stockId: 25
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy25-2.png',
      stockId: 25
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy25-3.png',
      stockId: 25
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy26-1.png',
      stockId: 26
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy26-2.png',
      stockId: 26
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy26-3.png',
      stockId: 26
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy27-1.png',
      stockId: 27
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy27-2.png',
      stockId: 27
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy27-3.png',
      stockId: 27
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy28-1.png',
      stockId: 28
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy28-2.png',
      stockId: 28
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy28-3.png',
      stockId: 28
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy29-1.png',
      stockId: 29
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy29-2.png',
      stockId: 29
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy29-3.png',
      stockId: 29
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy29-4.png',
      stockId: 29
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy30-1.png',
      stockId: 30
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy30-2.png',
      stockId: 30
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy30-3.png',
      stockId: 30
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy31-4.png',
      stockId: 31
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy31-1.png',
      stockId: 31
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy31-2.png',
      stockId: 31
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy31-3.png',
      stockId: 31
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy32-1.png',
      stockId: 32
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy32-2.png',
      stockId: 32
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy32-3.png',
      stockId: 32
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy32-4.png',
      stockId: 32
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy33-1.png',
      stockId: 33
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy33-2.png',
      stockId: 33
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy34-1.png',
      stockId: 34
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy34-2.png',
      stockId: 34
    }),
    await Images.create({
      imageUrl:
        'https://raw.githubusercontent.com/juneidea/Candy/master/candy34-3.png',
      stockId: 34
    })
  ]);

  const cart = await Promise.all([
    Cart.create({
      stockId: 9,
      userId: 1,
      total_quantity: 12,
      isPurchased: true
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

  const order = await Order.create({
    cartId: 1
  });

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
    await Category.create({
      category_name: 'Candy'
    }),
    await Category.create({
      category_name: 'Gummy'
    }),
    await Category.create({
      category_name: 'Chocolate'
    }),
    await Category.create({
      category_name: 'Collection'
    }),
    await Category.create({
      category_name: 'Lollipops'
    }),
    await Category.create({
      category_name: 'Cupcake'
    }),
    await Category.create({
      category_name: 'Paint Can'
    }),
    await Category.create({
      category_name: 'Soda Can'
    }),
    await Category.create({
      category_name: 'New'
    }),
    await Category.create({
      category_name: 'Good-To-Go'
    }),
    await Category.create({
      category_name: 'Salt Taffy'
    }),
    await Category.create({
      category_name: 'Signature'
    }),
    await Category.create({
      category_name: 'Chocolate Bar'
    }),
    await Category.create({
      category_name: 'Valentine Day'
    }),
    await Category.create({
      category_name: 'City Collection'
    })
  ]);

  // const historyItems = await Promise.all([
  //   HistoryItems.create({
  //     cart_id: 1,
  //     stock_id: 1,
  //     quantity: 13,
  //     historical_price: 10
  //   })
  // console.log('====MAGIC METHODS====>', Object.keys(stocks[0].__proto__))

  const stockCategory = await Promise.all([
    await stocks[0].addCategory(categories[0]),
    await stocks[0].addCategory(categories[4]),
    await stocks[1].addCategory(categories[0]),
    await stocks[1].addCategory(categories[8]),
    await stocks[1].addCategory(categories[11]),
    await stocks[2].addCategory(categories[1]),
    await stocks[2].addCategory(categories[11]),
    await stocks[3].addCategory(categories[2]),
    await stocks[3].addCategory(categories[5]),
    await stocks[4].addCategory(categories[1]),
    await stocks[4].addCategory(categories[6]),
    await stocks[5].addCategory(categories[1]),
    await stocks[5].addCategory(categories[6]),
    await stocks[6].addCategory(categories[1]),
    await stocks[6].addCategory(categories[7]),
    await stocks[7].addCategory(categories[0]),
    await stocks[7].addCategory(categories[4]),
    await stocks[7].addCategory(categories[8]),
    await stocks[8].addCategory(categories[1]),
    await stocks[8].addCategory(categories[9]),
    await stocks[9].addCategory(categories[0]),
    await stocks[9].addCategory(categories[10]),
    await stocks[10].addCategory(categories[0]),
    await stocks[10].addCategory(categories[4]),
    await stocks[11].addCategory(categories[0]),
    await stocks[11].addCategory(categories[10]),
    await stocks[12].addCategory(categories[0]),
    await stocks[12].addCategory(categories[10]),
    await stocks[13].addCategory(categories[1]),
    await stocks[13].addCategory(categories[11]),
    await stocks[14].addCategory(categories[1]),
    await stocks[14].addCategory(categories[11]),
    await stocks[15].addCategory(categories[1]),
    await stocks[15].addCategory(categories[6]),
    await stocks[16].addCategory(categories[1]),
    await stocks[16].addCategory(categories[6]),
    await stocks[17].addCategory(categories[1]),
    await stocks[17].addCategory(categories[6]),
    await stocks[18].addCategory(categories[1]),
    await stocks[18].addCategory(categories[7]),
    await stocks[19].addCategory(categories[1]),
    await stocks[19].addCategory(categories[7]),
    await stocks[20].addCategory(categories[1]),
    await stocks[20].addCategory(categories[7]),
    await stocks[21].addCategory(categories[1]),
    await stocks[21].addCategory(categories[9]),
    await stocks[22].addCategory(categories[2]),
    await stocks[22].addCategory(categories[5]),
    await stocks[23].addCategory(categories[2]),
    await stocks[23].addCategory(categories[12]),
    await stocks[24].addCategory(categories[2]),
    await stocks[24].addCategory(categories[11]),
    await stocks[24].addCategory(categories[12]),
    await stocks[25].addCategory(categories[2]),
    await stocks[25].addCategory(categories[12]),
    await stocks[26].addCategory(categories[2]),
    await stocks[26].addCategory(categories[9]),
    await stocks[27].addCategory(categories[2]),
    await stocks[27].addCategory(categories[9]),
    await stocks[28].addCategory(categories[3]),
    await stocks[28].addCategory(categories[13]),
    await stocks[29].addCategory(categories[3]),
    await stocks[29].addCategory(categories[13]),
    await stocks[30].addCategory(categories[3]),
    await stocks[30].addCategory(categories[13]),
    await stocks[31].addCategory(categories[3]),
    await stocks[31].addCategory(categories[14]),
    await stocks[32].addCategory(categories[3]),
    await stocks[32].addCategory(categories[14]),
    await stocks[33].addCategory(categories[3]),
    await stocks[33].addCategory(categories[14])
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
