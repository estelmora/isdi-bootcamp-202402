//@ts-nocheck
import db from '../data/index'
import logic from './index'

import { expect } from 'chai'

// Mock sessionStorage for Node.js environment
// global.sessionStorage = (function () {
//     let store = {}
//     return {
//         getItem: function (key) {
//             return store[key] || null;
//         },
//         setItem: function (key, value) {
//             store[key] = value.toString();
//         },
//         removeItem: function (key) {
//             delete store[key];
//         },
//         clear: function () {
//             store = {};
//         }
//     }
// })()

describe('logic', () => {
    describe('registerUser', () => {
        it('succeeds a new user', done => {
            db.users.deleteOne(user => user.username === 'peperoni', error => {
                if (error) {
                    done(error)

                    return
                }

                logic.registerUser('Pepe Roni', '2000-01-01', 'pepe@roni.com', 'peperoni', '123qwe123', error => {
                    if (error) {
                        done(error)

                        return
                    }

                    db.users.findOne(user => user.username === 'peperoni', (error, user) => {
                        if (error) {
                            done(error)

                            return
                        }

                        expect(!!user).to.be.true
                        expect(user.name).to.equal('Pepe Roni')
                        expect(user.birthdate).to.equal('2000-01-01')
                        expect(user.email).to.equal('pepe@roni.com')
                        expect(user.username).to.equal('peperoni')
                        expect(user.password).to.equal('123qwe123')

                        done()
                    })
                })
            })
        })

        it('fails on existing users', done => {
            db.users.deleteOne(user => user.username === 'peperoni', error => {
                if (error) {
                    done(error)

                    return
                }

                db.users.insertOne({ name: 'Pepe Roni', birthdate: '2000-01-01', email: 'pepe@roni.com', username: 'peperoni', password: '123qwe123' }, error => {
                    if (error) {
                        done(error)

                        return
                    }

                    logic.registerUser('Pepe Roni', '2000-01-01', 'pepe@roni.com', 'peperoni', '123qwe123', error => {
                        expect(error).to.be.instanceOf(Error)
                        expect(error.message).to.equal('user already exists')

                        done()
                    })
                })
            })
        })

        it('fails on non string name', () => {
            let errorThrown

            try {
                logic.registerUser(123, '2000-01-01', 'pepe@roni.com', 'peperoni', '123qwe123', () => { })
            } catch (error) {
                errorThrown = error
            }

            expect(errorThrown).to.be.instanceOf(TypeError)
            expect(errorThrown.message).to.equal('name 123 is not a string')
        })

        it('fails on empty name', () => {
            let errorThrown

            try {
                logic.registerUser('', '2000-01-01', 'pepe@roni.com', 'peperoni', '123qwe123', () => { })
            } catch (error) {
                errorThrown = error
            }

            expect(errorThrown).to.be.instanceOf(Error)
            expect(errorThrown.message).to.equal('name >< is empty or blank')
        })

        it('fails on non string birthdate', () => {
            let errorThrown

            try {
                logic.registerUser('Pepe Roni', 123, 'pepe@roni.com', 'peperoni', '123qwe123', () => { })
            } catch (error) {
                errorThrown = error
            }

            expect(errorThrown).to.be.instanceOf(TypeError)
            expect(errorThrown.message).to.equal('birthdate 123 is not a string')
        })

        it('fails on incorrect birthdate format', () => {
            let errorThrown

            try {
                logic.registerUser('Pepe Roni', '2000/01/01', 'pepe@roni.com', 'peperoni', '123qwe123', () => { })
            } catch (error) {
                errorThrown = error
            }

            expect(errorThrown).to.be.instanceOf(Error)
            expect(errorThrown.message).to.equal('birthdate 2000/01/01 does not have a valid format')
        })

        // TODO add other unhappy test cases
    })

    describe('loginUser', () => {
        it('succeeds on existing user and correct credentials', done => {
            db.users.deleteOne(user => user.username === 'peperoni', error => {
                if (error) {
                    done(error)

                    return
                }

                db.users.insertOne({ name: 'Pepe Roni', birthdate: '2000-01-01', email: 'pepe@roni.com', username: 'peperoni', password: '123qwe123' }, (error, insertedUserId) => {
                    if (error) {
                        done(error)

                        return
                    }

                    logic.loginUser('peperoni', '123qwe123', (error, userId) => {
                        if (error) {
                            done(error)

                            return
                        }

                        expect(userId).to.equal(insertedUserId)

                        db.users.findOne(user => user.id === userId, (error, user) => {
                            if (error) {
                                done(error)

                                return
                            }

                            expect(user.status).to.equal('online')

                            done()
                        })
                    })
                })
            })
        })

        it('fails on existing user and incorrect password', done => {
            db.users.deleteOne(user => user.username === 'peperoni', error => {
                if (error) {
                    done(error)

                    return
                }

                db.users.insertOne({ name: 'Pepe Roni', birthdate: '2000-01-01', email: 'pepe@roni.com', username: 'peperoni', password: '123qwe123' }, error => {
                    if (error) {
                        done(error)

                        return
                    }

                    logic.loginUser('peperoni', '123qwe123qwe', (error, userId) => {
                        expect(error).to.be.instanceOf(Error)
                        expect(error.message).to.equal('wrong password')
                        expect(userId).to.be.undefined

                        done()
                    })
                })
            })
        })

        it('fails on existing user and incorrect username', done => {
            db.users.deleteOne(user => user.username === 'peperoni', error => {
                if (error) {
                    done(error)

                    return
                }

                db.users.insertOne({ name: 'Pepe Roni', birthdate: '2000-01-01', email: 'pepe@roni.com', username: 'peperoni', password: '123qwe123' }, error => {
                    if (error) {
                        done(error)

                        return
                    }

                    logic.loginUser('peperoni2', '123qwe123', (error, userId) => {
                        expect(error).to.be.instanceOf(Error)
                        expect(error.message).to.equal('user not found')

                        expect(userId).to.be.undefined

                        done()
                    })
                })
            })
        })
    })

    describe('retrieveUser', () => {
        it('retrieves existing user', done => {
            db.users.deleteOne(user => user.username === 'peperoni', error => {
                if (error) {
                    done(error)

                    return
                }

                db.users.insertOne({ name: 'Pepe Roni', birthdate: '2000-01-01', email: 'pepe@roni.com', username: 'peperoni', password: '123qwe123' }, (error, insertedUserId) => {
                    if (error) {
                        done(error)

                        return
                    }

                    logic.retrieveUser(insertedUserId, (error, user) => {
                        if (error) {
                            done(error)

                            return
                        }

                        expect(user.id).to.be.undefined
                        expect(user.username).to.equal('peperoni')
                        expect(user.email).to.equal('pepe@roni.com')
                        expect(user.birthdate).to.equal('2000-01-01')
                        expect(user.password).to.be.undefined
                        expect(user.status).to.be.undefined

                        done()
                    })
                })
            })
        })

        it('does no retrieve a non-existing user', done => {
            db.users.deleteOne(user => user.username === 'peperoni', error => {
                if (error) {
                    done(error)

                    return
                }

                db.users.insertOne({ name: 'Pepe Roni', birthdate: '2000-01-01', email: 'pepe@roni.com', username: 'peperoni', password: '123qwe123' }, (error, insertedUserId) => {
                    if (error) {
                        done(error)

                        return
                    }

                    logic.retrieveUser('wrong-id', (error, user) => {
                        expect(error).to.be.instanceOf(Error)
                        expect(error.message).to.equal('user not found')

                        expect(user).to.be.undefined

                        done()
                    })
                })
            })
        })
    })
    describe('logoutUser', () => {
        it('should set user status to offline', (done) => {
            // Assuming there's a user in the database we're logging out.
            const userId = '12345'; // Example user ID
            db.users.updateOne({ id: userId }, { status: 'online' }, (error) => {
                if (error) return done(error);

                // Simulating logoutUser functionality
                logic.logoutUser(userId, (error) => {
                    if (error) return done(error);

                    db.users.findOne({ id: userId }, (error, user) => {
                        if (error) return done(error);

                        expect(user.status).to.equal('offline');
                        done();
                    });
                });
            });
        });
    });
    describe('getLoggedInUserId', () => {
        it('should return the userId of the logged-in user', (done) => {
            // Setup: Assuming a user is "logged in"
            const userId = '12345'; // Example user ID
            db.users.updateOne({ id: userId }, { status: 'online' }, (error) => {
                if (error) return done(error);

                // Test the function
                logic.getLoggedInUserId((error, retrievedUserId) => {
                    expect(retrievedUserId).to.equal(userId);
                    done();
                });
            });
        });
    });
    describe('isUserLoggedIn', () => {
        it('should return true if a user is logged in', (done) => {
            // Setup: User logged in
            const userId = '12345'; // Example user ID
            db.users.updateOne({ id: userId }, { status: 'online' }, (error) => {
                if (error) return done(error);

                // Test the function
                logic.isUserLoggedIn((error, isLoggedIn) => {
                    expect(isLoggedIn).to.be.true;
                    done();
                });
            });
        });

        it('should return false if no user is logged in', (done) => {
            // Setup: No user logged in
            db.users.updateAll({}, { status: 'offline' }, (error) => {
                if (error) return done(error);

                // Test the function
                logic.isUserLoggedIn((error, isLoggedIn) => {
                    expect(isLoggedIn).to.be.false;
                    done();
                });
            });
        });
    });
    describe('logoutUser', () => {
        it('should simulate setting user status to offline', (done) => {
            // Setup: Example user ID to simulate a logout process
            const userId = '12345'; // Ensure this ID corresponds to a user in your mocked DB
            // Pretend the user is currently logged in by setting their status to 'online'
            db.users.updateOne({ id: userId }, { $set: { status: 'online' } }, (error) => {
                if (error) return done(error);

                // Execute: Call the logoutUser function
                logic.logoutUser(userId, (error) => {
                    expect(error).to.be.null;

                    // Verify: User's status should now be 'offline'
                    db.users.findOne({ id: userId }, (err, user) => {
                        if (err) return done(err)
                        expect(user.status).to.equal('offline')
                        done();
                    })
                })
            })
        })
    })

    describe('getLoggedInUserId', () => {
        it('should return the userId of the logged-in user', (done) => {
            // This test might need adjustment based on your application's method
            // of tracking logged-in users without sessionStorage.
            done();
        });
    });

    describe('isUserLoggedIn', () => {
        it('should return true if a user is logged in', (done) => {
            // As above, adjust based on your tracking method.
            done()
        })

        it('should return false if no user is logged in', (done) => {
            // As above, adjust based on your tracking method.
            done()
        })
    })

    describe('retrieveUsersWithStatus', () => {
        it('should retrieve all users except the logged-in user, with their status', (done) => {
            // Setup: Insert a few users into the db, including the logged-in user
            const users = [
                { id: '12345', username: 'peperoni', status: 'online' }, // Logged-in user
                { id: '67890', username: 'user2', status: 'offline' },
                // Add more users as needed
            ];
            // Pretend to insert these users into db

            // Execute: Retrieve users with their status
            logic.retrieveUsersWithStatus((error, retrievedUsers) => {
                if (error) return done(error);

                // Verify: Expect to retrieve all users except the logged-in one
                expect(retrievedUsers).to.satisfy(users => users.every(user => user.id !== '12345'));
                // Further checks on the structure of retrievedUsers can be added here
                done()
            })
        })
    })

    describe('sendMessageToUser', () => {
        it('should correctly add a message to the chat between two users', (done) => {
            // Setup: Two user IDs and a message
            const fromUserId = '12345', toUserId = '67890', messageText = 'Hello there!';

            // Execute: Send a message from one user to the other
            logic.sendMessageToUser(fromUserId, toUserId, messageText, (error) => {
                if (error) return done(error);

                // Verify: Check if the message has been added to the chat
                // This step depends heavily on how you've structured chats in your db
                done()
            })
        })
    })
    describe('logoutUser', () => {
        it('should set user status to offline', done => {

            const userId = 'testUserId' //Make sure the user exists in DB & make sure the user is online before logging out

            db.users.updateOne({ id: userId }, { status: 'online' }, error => {
                if (error) return done(error)

                logic.logoutUser(userId, error => {
                    if (error) return done(error)

                    db.users.findOne({ id: userId }, (error, user) => {
                        // after logging out check the user is 'offline'
                        if (error) return done(error)

                        expect(user.status).to.equal('offline')
                        done()
                    })
                })
            })
        })
    })

    describe('getLoggedInUserId', () => {
        it('should return the userId of the logged-in user', done => {
            // Log in a user by setting a condition

            db.sessions.insert({ userId: 'loggedInUserId' }, error => {
                if (error) return done(error);

                logic.getLoggedInUserId((error, userId) => {
                    if (error) return done(error);

                    expect(userId).to.equal('loggedInUserId');
                    db.sessions.delete({ userId: 'loggedInUserId' }, err => done(err));
                })
            })
        })

        it('should return an error or null when no user is logged in', done => {
            // Ensure there's no logged-in user.
            // This could involve clearing the sessions table or however you track logged-in state.
            db.sessions.clear(error => { // Pseudo-code, replace with actual cleanup logic
                if (error) return done(error);

                logic.getLoggedInUserId((error, userId) => {
                    expect(error).to.exist.or; // Check if an error exists
                    expect(userId).to.not.exist; // Alternatively, check if userId is null/undefined
                    done();
                })
            })
        })
    })
    describe('isUserLoggedIn', () => {
        it('should return true if a user is logged in', done => {

            logic.isUserLoggedIn((error, isLoggedIn) => {
                if (error) return done(error);

                expect(isLoggedIn).to.be.true;
                done()
            })
        })

        it('should return false if no user is logged in', done => {

            logic.isUserLoggedIn((error, isLoggedIn) => {
                if (error) return done(error)

                expect(isLoggedIn).to.be.false
                done()
            })
        })
    })
    describe('createPost', () => {
        it('should correctly add a post with an image and text', done => {
            const image = 'http://example.com/image.jpg';
            const text = 'Hello, world!';
            // Assuming a user is logged in
            const userId = 'loggedInUserId';

            // You might need to log in a user here or set a condition that mimics a user login

            logic.createPost(image, text, error => {
                if (error) return done(error);

                // Assuming your db.posts query allows you to find a post by userId
                db.posts.findOne({ author: userId }, (error, post) => {
                    if (error) return done(error);

                    expect(post).to.not.be.null;
                    expect(post.image).to.equal(image);
                    expect(post.text).to.equal(text);
                    done();
                })
            })
        })
    })
    describe('retrievePosts', () => {
        it('should retrieve all posts', done => {


            logic.retrievePosts((error, posts) => {
                // show posts already saved in the database
                if (error) return done(error);

                expect(posts).to.be.an('array').that.is.not.empty;
                const post = posts[0];
                expect(post).to.have.all.keys('author', 'image', 'text', 'date');
                done();
            })
        })
    })
    describe('removePost', () => {
        it('should remove a post by its ID', done => {

            const testPost = { /* details of the post */ };
            db.posts.insertOne(testPost, (error, postId) => {
                if (error) return done(error);

                logic.removePost(postId, error => {
                    if (error) return done(error);

                    // Verify the post has been removed
                    db.posts.findOne({ id: postId }, (error, post) => {
                        if (error) return done(error);

                        expect(post).to.be.null;
                        done();
                    })
                })
            })
        })
    })
})

// 🚨 Template for additional functions
// describe('functionName', () => {
// it('should ...', (done) => {
// Session Storage can't be used, instead (pass a callback, error)
 

//  🚨 TRANSFORM IT TO EXPRESS.JS!!