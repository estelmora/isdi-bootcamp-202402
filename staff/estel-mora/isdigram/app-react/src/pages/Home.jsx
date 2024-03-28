import { logger, showFeedback } from '../utils'

import logic from '../logic'

import React, { Component } from 'react';
import PostList from '../components/PostList'
import CreatePost from '../components/CreatePost'
import EditPost from '../components/EditPost'

class Home extends Component {
    constructor() {
        logger.debug('Home')

        super()

        try {
            const user = logic.retrieveUser()

            this.user = user

        } catch (error) {
            showFeedback(error)
        }

        this.state = { view: null, stamp: null, post: null }
    }

    setState(state) {
        logger.debug('Home -> setState', JSON.stringify(state))

        super.setState(state)
    }

    clearView = () => this.setState({ view: null })

    handleCreatePostCancelClick = () => this.clearView()

    handlePostCreated = () => this.setState({ view: null, stamp: Date.now() })

    handleCreatePostClick = () => this.setState({ view: 'create-post' })

    handleLogoutClick = () => {
        try {
            logic.logoutUser()
        } catch (error) {
            logic.cleanUpLoggedInUser()
        } finally {
            this.props.onUserLoggedOut()
        }
    }

    handleEditPostCancelClick = () => this.clearView()

    handleEditPostClick = post => this.setState({ view: 'edit-post', post })

    handlePostEdited = () => this.setState({ view: null, stamp: Date.now(), post: null })

    render() {
        logger.debug('Home -> render')

        return <main className="main">
            <h1>Hello, {this.user.name}!</h1>

            <nav>
                <button>💬</button>
                <button onClick={this.handleLogoutClick}>🚪</button>
            </nav>

            <PostList stamp={this.state.stamp} onEditPostClick={this.handleEditPostClick} />

            {this.state.view === 'create-post' && <CreatePost onCancelClick={this.handleCreatePostCancelClick} onPostCreated={this.handlePostCreated} />}

            {this.state.view === 'edit-post' && <EditPost post={this.state.post} onCancelClick={this.handleEditPostCancelClick} onPostEdited={this.handlePostEdited} />}

            <footer className="footer">
                <button onClick={this.handleCreatePostClick}>➕</button>
            </footer>
        </main>
    }
}

export default Home


// && <CreatePost onCancelClick={() => this.setState({ view: null })} onPostCreated={() => {
// When a post is created, it resets the view to null and updates the 'stamp' with the current timestamp to trigger a refresh.

 
//🚨 STAMP: is a state property in the PostList that represents a unique identifier that changes whenever new posts are created, updated, or deleted. Its purpose is to signal the component to re-fetch the posts and update accordingly. When the stamp value changes, it indicates that the data might have changed, and the component should retrieve the latest posts.  


// 🚨 HANDLE.logOut/CreatePost:  is a naming convention, not a language requirement. It signifies that the method is an event handler—a function designed to respond to events, typically user actions like clicks, form submissions, or key presses. Ex: handleLogout it deals with the logout process, when a logout button is clicked.

