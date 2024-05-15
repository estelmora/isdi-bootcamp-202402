// import dotenv from 'dotenv'
// dotenv.config()

// import mongoose from 'mongoose'
// import { expect } from 'chai'
// import { errors } from '../../../utils/errors.ts'

// import { User } from '../../../data/index.ts'
// import logic from '../../index.ts'

// const { Types: { ObjectId } } = mongoose
// const { NotFoundError } = errors

// describe('retrieveUser', () => {
//     before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

//     it('retrieves existing user', () =>
//         User.deleteMany()
//             .then(() => User.create({ name: 'Pepe', surname: 'Roni', email: 'pepe@roni.com', password: '123qwe123' }))
//             .then(user => logic.retrieveUser(user.id))
//             .then(user => {
//                 expect(user.name).to.equal('Pepe')
//                 expect(user.surname).to.equal('Roni')
//                 expect(user.email).to.equal('pepe@roni.com')
//             })
//     )

//     it('does not retrieve non-existing user', () =>
//         User.deleteMany()
//             .then(() => logic.retrieveUser(new ObjectId().toString()))
//             .catch(error => {
//                 expect(error).to.be.instanceOf(NotFoundError)
//                 expect(error.message).to.equal('User not found')
//             })
//     )

//     after(() => mongoose.disconnect())
// })