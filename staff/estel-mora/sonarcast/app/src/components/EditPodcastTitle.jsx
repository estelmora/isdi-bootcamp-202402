import React from 'react'
import { useContext, logger } from '../utils'
import logic from '../logic'

import CancelButton from './library/CancelButton'
import SubmitButton from './library/SubmitButton'

function EditPodcastTitle({ podcast, onPodcastTitleEdited, onCancelClick }) {
    logger.debug('EditPodcastTitle → render')

    const { showFeedback } = useContext()

    const handleSubmit = async event => {
        logger.debug('EditPodcastTitle → handleSubmit')
        event.preventDefault()

        const { title } = event.target.elements

        try {
            await logic.editPodcastTitle(podcast.id, title.value)
            event.target.reset()
            onPodcastTitleEdited()
        } catch (error) {
            showFeedback(error, 'error')
        }
    }

    return (
        <section className="p-4 mx-auto max-w-4xl mt-5">
            <form onSubmit={handleSubmit} className="space-y-4">
                <label htmlFor="title" className="text-sky-900 text-lg font-semibold">New Title</label>
                <input
                    id="title"
                    type="text"
                    defaultValue={podcast.title}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
                <SubmitButton>Save</SubmitButton>
                <CancelButton onClick={onCancelClick} />
            </form>
        </section>
    )
}

export default EditPodcastTitle
