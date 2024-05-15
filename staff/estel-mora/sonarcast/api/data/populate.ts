import mongoose from 'mongoose'

import { User, Podcast } from '.'

mongoose.connect('mongodb://localhost:27017/isdigram')
    .then(() => User.deleteMany())
    .then(() => Podcast.deleteMany())
    .then(() => User.create({ name: 'Sardina', surname: 'Felina', email: 'sardina@felina.com', password: 'sardineta' }))
    .then(user1 => {
        const podcast1 = { author: user1._id, transcript: `Esto es un transcript sobre recetas de cocina.`, ideas: `Pasta con chocolate: sí o no.`, date: new Date }

        return Podcast.create(podcast1)
            .then(() => {
                const podcast2 = { author: user1._id, transcript: `Esto es un transcript sobre futbol.`, ideas: `Ronaldinho como presidente del Girona FC?`, date: new Date }

                return Podcast.create(podcast2)
            })
            .then(() => {
                const podcast3 = { author: user1._id, transcript: `Esto es un transcript sobre estética.`, ideas: `Botox en los codos, nueva tendencia.`, date: new Date }

                return Podcast.create(podcast3)
            })
    })
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)