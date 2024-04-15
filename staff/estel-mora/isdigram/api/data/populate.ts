import mongoose from "mongoose"
import { User, Post } from './index.ts'


mongoose.connect('mongodb://localhost:27017/isdigram')
    .then(() => User.deleteMany())
    .then(() => Post.deleteMany())
    .then(() => User.create({
        name: 'Pepe Roni',
        birthdate: '200-01-01',
        email: 'pepe@roni.com',
        username: 'peperoni',
        passowrd: '123qwe122'
    }))
    .then(user1 => {
        let count = 1
        const post1 = { author: user1._id, image: `https://media.giphy.com/media/qf1S370w70inS/giphy.gif?cid=790b7611s8ymrlcrguja5ip00p77wfuil5bfy5pb2q6y5o3t&ep=v1_gifs_search&rid=giphy.gif&ct=g`, text: `hello post ${count}`, date: new Date }

        return Post.create(post1)
            .then(() => {
                count++

                const post2 = { author: user1._id, image: `https://media.giphy.com/media/SRwH5w22ttzlpyCrCv/giphy.gif?cid=ecf05e47vcuh33r21b33897ipj42sqdj8sul3t30jw62koa1&ep=v1_gifs_search&rid=giphy.gif&ct=g`, text: `hello post ${count}`, date: new Date }

                return Post.create(post2)
            })
            .then(() => {
                count++

                const post3 = { author: user1._id, image: `https://media.giphy.com/media/vsfA2ZTLWIMDK/giphy.gif?cid=ecf05e475lbgkomtu4v5pvd2xxgqfe45vdiyh7ndvnpgzy8n&ep=v1_gifs_search&rid=giphy.gif&ct=g`, text: `hello post ${count}`, date: new Date }

                return Post.create(post3)
            })
    })
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)
