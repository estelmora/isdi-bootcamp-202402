import { logger, showFeedback } from '../utils'
import logic from '../logic.mjs'

import React, { Component } from 'react';
import Post from './Post'



class PostList extends Component {
    constructor() {
        logger.debug('PostList')

        super()

        this.state = { posts: [] }
    }

    loadPosts() {
        logger.debug('PostList -> loadPosts')

        try {
            const posts = logic.retrievePosts()

            this.setState({ posts })
        } catch (error) {
            showFeedback(error)
        }
    }

    componentWillReceiveProps(newProps) {
        logger.debug('PostList -> componentWillReceiveProps', JSON.stringify(this.props), JSON.stringify(newProps))

        //if (newProps.stamp !== this.props.stamp) this.loadPosts()
        newProps.stamp !== this.props.stamp && this.loadPosts()
    }

    componentDidMount() {
        logger.debug('PostList -> componentDidMount')

        this.loadPosts()
    }

    handlePostDeleted = () => this.loadPosts()

    handleEditClick = post => this.props.onEditPostClick(post)

    render() {
        logger.debug('PostList -> render')

        return <section>
            {this.state.posts.map(post => <Post item={post} onEditClick={this.handleEditClick} onDeleted={this.handlePostDeleted} />)}
        </section>
    }
}

export default PostList


// The render() method returns the JSX that should be rendered by this component

//{/* this.state.posts.map: over the 'posts' array stored in the component's state, creating an 'article' element for each post. */}

//<article key={post.id}> {/* Each 'article' element is given a unique 'key' prop, which is required by React when rendering lists of elements. */}

// {/* xxxx */} comentar en REACT

//alt="" : the alternative text is explicitly set to an empty string

