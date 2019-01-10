// const { db } = require('../server/db')
// const { Stock } = require('../server/db/models/stock')

// describe('Sequelize Model', () => {
//   let robot;
//   before(() => db.sync({ force: true }))
//   afterEach(() => db.sync({ force: true }))

//   it('has fields name, imageUrl, fuelType, fuelLevel', async () => {
//     robot.notARealAttribute = 'does not compute'
//     const seedStock = await Stock.findById(1)
//     expect(seedStock.name).to.equal('R2-D2')
//     expect(savedRobot.imageUrl).to.equal('/images/r2d2.png')
//     expect(savedRobot.fuelType).to.equal('electric')
//     expect(savedRobot.fuelLevel).to.equal(88.34)
//     expect(savedRobot.notARealAttribute).to.equal(undefined)
//   })

//   it('*** name cannot be null or an empty string', async () => {
//     const robo = Robot.build({ name: ''})
//     try {
//       await robo.validate()
//       throw Error('validation should have failed with empty title')
//     }
//     catch (err) {
//       expect(err.message).to.contain('Validation notEmpty on name failed')
//     }
//   })

//   it('fuelType can only be gas, diesel, or electric (defaults to electric)', async () => {
//     robot.fuelType = 'the power of love'
//     try {
//       const badFuelRobot = await Robot.create(robot)
//       if (badFuelRobot) throw Error('Validation should have failed with invalid fuelType')
//     } catch (err) {
//       expect(err.message).to.not.have.string('Validation should have failed')
//     }
//     delete robot.fuelType
//     const defaultFuelRobot = await Robot.create(robot)
//     expect(defaultFuelRobot.fuelType).to.equal('electric')
//   })

//   it('fuelLevel must be between 0 and 100 (defaults to 100)', async () => {
//     robot.fuelLevel = -10
//     try {
//       const negativeFuelRobot = await Robot.create(robot)
//       if (negativeFuelRobot) throw Error('Validation should have failed with fuelLevel < 0')
//     } catch (err) {
//       expect(err.message).to.not.have.string('Validation should have failed')
//     }
//     robot.fuelLevel = 9001
//     try {
//       const tooMuchFuelRobot = await Robot.create(robot)
//       if (tooMuchFuelRobot) throw Error('Validation should have failed with fuelLevel > 100')
//     } catch (err) {
//       expect(err.message).to.not.have.string('Validation should have failed')
//     }
//     delete robot.fuelLevel
//     const defaultFuelLevelRobot = await Robot.create(robot)
//     expect(defaultFuelLevelRobot.fuelLevel).to.equal(100)
//   })
// })

// describe('Database model stock test', () => {
//   describe('Seed File', () => {
//     it('populates the database with at least three stocks', async () => {
//       const seedRobots = await Stock.findAll()
//       expect(seedRobots).to.have.lengthOf.at.least(3)
//     })
//   })
// })
