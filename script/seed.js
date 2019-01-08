'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const {Stock} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

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
  ])

  const stocks = await Promise.all([Stock.create({name: 'Jelly Bean'})])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
