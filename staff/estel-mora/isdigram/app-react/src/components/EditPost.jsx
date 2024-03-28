import React, { Component } from 'react';
import { logger, showFeedback } from '../utils'

import logic from '../logic'

class EditPost extends Component {
    constructor() {
        logger.debug('EditPost')

        super()
    }

    componentDidMount() {
        logger.debug('EditPost -> componentDidMount')
    }

    componentWillUnmount() {
        logger.debug('EditPost -> componentWillUnmount')
    }

    handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const text = form.text.value

        logger.debug('EditPost -> handleSubmit', text)

        try {
            logic.modifyPost(this.props.post.id, text)

            form.reset()

            this.props.onPostEdited()
            // Notifies the parent component that the post has been edited.

        } catch (error) {
            showFeedback(error)
        }
    }

    handleCancelClick = () => this.props.onCancelClick()

    render() {
        logger.debug('EditPost -> render')

        return <section className="edit-post">
            <form onSubmit={this.handleSubmit}>
                <label>Text</label>
                <input id="text" type="text" defaultValue={this.props.post.text} />

                <button className="round-button submit-button" type="submit">Edit</button>
            </form>

            <button className="round-button cancel-button" onClick={this.handleCancelClick}>Cancel</button>
        </section>
    }
}

export default EditPost


// 🚨 componentDidMount: This method is called after the component has been rendered into the DOM, useful for any setup that requires DOM nodes or data fetching.

// 🚨 componentWillUnmount: This method is invoked before the component is unmounted and destroyed, useful for cleanup to avoid memory leaks.