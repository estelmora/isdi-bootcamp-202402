
import mongoose from 'mongoose'
import { User } from './index'

mongoose.connect('mongodb://localhost:27017/sonarcast')
    .then(() => User.deleteMany())
    .then(() => User.create({ name: 'Estel', email: 'estel@email.com', password: '123qwe123' }))

    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)