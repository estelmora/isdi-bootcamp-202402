// import dotenv from 'dotenv'
// dotenv.config()

// import mongoose from 'mongoose'
// import { expect } from 'chai'
// import { errors } from '../../../utils/errors.ts'

// import { User } from '../../../data/index.ts'
// import logic from '../../index.ts'

// const { CredentialsError, NotFoundError } = errors

// describe('authenticateUser', () => {
//     before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

//     it('succeeds on existing user and correct credentials', () =>
//         User.deleteMany()
//             .then(() => User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' }))
//             .then(user =>
//                 logic.authenticateUser('pepe@roni.com', '123qwe123')
//                     .then(userId => {
//                         expect(userId).to.be.a('string')
//                         expect(userId).to.equal(user.id)
//                     })
//             )
//     )

//     it('fails on existing user and incorrect password', () =>
//         User.deleteMany()
//             .then(() => User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' }))
//             .then(() => logic.authenticateUser('pepe@roni.com', '123qwe123qwe'))
//             .catch(error => {
//                 expect(error).to.be.instanceOf(CredentialsError)
//                 expect(error.message).to.equal('wrong password')
//             })
//     )

//     it('fails on existing user and incorrect email', () =>
//         User.deleteMany()
//             .then(() => User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' }))
//             .then(() => logic.authenticateUser('pepe@roni2.com', '123qwe123'))
//             .catch(error => {
//                 expect(error).to.be.instanceOf(NotFoundError)
//                 expect(error.message).to.equal('user not found')
//             })
//     )

//     after(() => mongoose.disconnect())
// })