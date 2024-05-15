// import dotenv from 'dotenv'
// dotenv.config()

// import mongoose from 'mongoose'
// import { expect } from 'chai'
// import { errors } from '../../../utils/errors.ts'

// import { User } from '../../../data/index.ts'
// import logic from '../../index.ts'

// const { DuplicityError } = errors

// describe('registerUser', () => {
//     before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

//     it('succeeds a new user', () =>
//         User.deleteMany()
//             .then(() => logic.registerUser('Pepe', 'Roni', 'pepe@roni.com', '123qwe123'))
//             .then(() => User.findOne({ email: 'pepe@roni.com' }))
//             .then(user => {
//                 expect(!!user).to.be.true
//                 expect(user.name).to.equal('Pepe')
//                 expect(user.surname).to.equal('Roni')
//                 expect(user.email).to.equal('pepe@roni.com')
//                 expect(user.password).to.equal('123qwe123')
//             })
//     )

//     it('fails on existing users', () =>
//         User.deleteMany()
//             .then(() => User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' }))
//             .then(() =>
//                 logic.registerUser('Pepe', 'Roni', 'pepe@roni.com', '123qwe123')
//                     .catch(error => {
//                         expect(error).to.be.instanceOf(DuplicityError)
//                         expect(error.message).to.equal('user already exists')
//                     })
//             )
//     )

//     it('fails on non string name', () => {
//         let errorThrown

//         try {
//             // @ts-ignore
//             logic.registerUser(123, 'Roni', 'pepe@roni.com', '123qwe123')
//         } catch (error) {
//             errorThrown = error
//         }

//         expect(errorThrown).to.be.instanceOf(TypeError)
//         expect(errorThrown.message).to.equal('name 123 is not a string')
//     })

//     it('fails on empty name', () => {
//         let errorThrown

//         try {
//             logic.registerUser('', 'Roni', 'pepe@roni.com', '123qwe123')
//         } catch (error) {
//             errorThrown = error
//         }

//         expect(errorThrown).to.be.instanceOf(Error)
//         expect(errorThrown.message).to.equal('name >< is empty or blank')
//     })

//     it('fails on non string surname', () => {
//         let errorThrown

//         try {
//             // @ts-ignore
//             logic.registerUser('Pepe', 123, 'pepe@roni.com', '123qwe123')
//         } catch (error) {
//             errorThrown = error
//         }

//         expect(errorThrown).to.be.instanceOf(TypeError)
//         expect(errorThrown.message).to.equal('surname 123 is not a string')
//     })

//     it('fails on empty surname', () => {
//         let errorThrown

//         try {
//             logic.registerUser('Pepe', '', 'pepe@roni.com', '123qwe123')
//         } catch (error) {
//             errorThrown = error
//         }

//         expect(errorThrown).to.be.instanceOf(Error)
//         expect(errorThrown.message).to.equal('surname >< is empty or blank')
//     })

//     after(() => mongoose.disconnect())
// })