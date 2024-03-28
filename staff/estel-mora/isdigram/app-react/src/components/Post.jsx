import React, { Component } from 'react';

import { logger, showFeedback } from '../utils'
import logic from '../logic.mjs'

class Post extends Component {
    constructor() {
        logger.debug('Post')

        super()
    }

    handleDeleteClick = postId => {
        if (confirm('delete post?'))
            try {
                logic.removePost(postId)

                this.props.onDeleted()
                //Calls a callback function passed via props, indicating that the post has been deleted
            } catch (error) {
                showFeedback(error)
            }
    }

    handleEditClick = post => this.props.onEditClick(post)
    //This method is straightforward; it triggers an edit action by calling this.props.onEditClick, passing the post data to the parent component

    render() {
        const { item: post } = this.props
        //Destructures the post item from props.

        return <article key={post.id}>
            <h3>{post.author.username}</h3>

            <img src={post.image} />

            <p>{post.text}</p>

            <time>{post.date}</time>

            {logic.getLoggedInUserId() === post.author.id && <>
                <button onClick={() => this.handleDeleteClick(post.id)}>🗑️</button>
                <button onClick={() => this.handleEditClick(post)}>📝</button>
            </>}
        </article>
    }
}

export default Post


// 🔑Point > Props for Callbacks: The component relies on callbacks passed through props (onDeleted, onEditClick) to notify the parent component of actions like deleting or editing a pos