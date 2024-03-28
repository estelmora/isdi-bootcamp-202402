import { logger, showFeedback } from '../utils'
import logic from '../logic'

import React, { Component } from 'react';

class CreatePost extends Component {
    constructor() {
        logger.debug('CreatePost')

        super()
    }

    componentDidMount() {
        logger.debug('CreatePost -> componentDidMount')
    }

    componentWillUnmount() {
        logger.debug('CreatePost -> componentWillUnmount')
    }

    handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const image = form.image.value
        const text = form.text.value

        try {
            logic.createPost(image, text)

            form.reset()

            this.props.onPostCreated()
        } catch (error) {
            showFeedback(error)
        }
    }

    handleCancelClick = () => this.props.onCancelClick()

    render() {
        logger.debug('CreatePost -> render')

        return <section className="create-post">
            <form onSubmit={this.handleSubmit}>
                <label>Image</label>
                <input id="image" type="text" />

                <label>Text</label>
                <input id="text" type="text" />

                <button className="round-button submit-button" type="submit">Create</button>
            </form>

            <button className="round-button cancel-button" onClick={this.handleCancelClick}>Cancel</button>
        </section>
    }
}

export default CreatePost

//this:  refers to the component instance itself. It allows you to access properties and methods defined on the component

//props: are how components talk to each other in React.  Props are immutable within the receiving component, which means they cannot be changed by the component that receives them.

//this.props: accesses the props object, letting you use data passed down from the parent component


//🚨 ComponentWillReceiveProps:is a method that gets called before a component receives new props.Is passed the upcoming props as an argument, which allows the component to react to changes in props before the render is called. It's used to update the state based on changes in props, pre-fetch data based on new prop values, or perform other operations before the component re-renders.

//🚨 componentDidMount(): This method is called after the component is inserted into the DOM tree

//'CreatePost -> componentDidMount') simply logs that the component has mounted.

// 🚨 componentWillUnmount(): This method is called before the component is removed from the DOM. It's used to avoid memory leaks,removing event listeners or canceling network requests made in componentDidMount.
// In your component, logger.debug('CreatePost -> componentWillUnmount') logs that the component is about to unmount