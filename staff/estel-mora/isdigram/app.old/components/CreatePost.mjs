import utils from '../../utils.mjs'
import logic from '../../logic.mjs'

import Component from '../../core/Component.mjs'
import Label from '../../core/Label.mjs'
import Input from '../../core/Input.mjs'
import Form from '../../core/Form.mjs'

import SubmitButton from '../../library/SubmitButton.mjs'
import CancelButton from '../../library/CancelButton.mjs'

class CreatePost extends Component { // crea una sección dentro de CreatePost que es una extensión de "Component"
    constructor() {
        super('section') // super es una instancia de  las características de "Component"

        this.addClass('create-post')
        const title = new Component('h2')
        title.setText('Create Post')

        const form = new Form

        const imageLabel = new Label
        imageLabel.setFor('image')
        imageLabel.setText('Image')

        const imageInput = new Input
        imageInput.setId('image')
        imageInput.setType('text')

        const textLabel = new Label
        textLabel.setFor('text')
        textLabel.setText('Text')

        const textInput = new Input
        textInput.setId('text')
        textInput.setType('text')

        const createButton = new SubmitButton
        createButton.setText('Create')

        form.add(imageLabel, imageInput, textLabel, textInput, createButton)

        const cancelButton = new CancelButton
        cancelButton.setText('Cancel')
        this._cancelButton = cancelButton

        this.add(form, cancelButton)
        form.onSubmit(event => {
            event.preventDefault()

            const image = imageInput.getValue()
            const text = textInput.getValue()

            try {
                logic.createPost(image, text)

                this._onPostCreatedCallback()
            } catch (error) {
                utils.showFeedback(error)
            }
        })

        this._onPostCreatedCallback = null
        CreatePost.active = true
    }
    static active = false

    onCancelClick(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._cancelButton.onCancelClick(() => {
            CreatePost.active = false
            callback()
        })
    }
    onPostCreated(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._onpostCreatedCallback = () => {
            CreatePost.active = false

            callback
        }
    }
}

export default CreatePost