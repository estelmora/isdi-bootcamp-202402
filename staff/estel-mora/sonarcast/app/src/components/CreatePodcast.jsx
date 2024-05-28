import React, { useState } from 'react'
import { useContext, logger } from '../utils'
import logic from '../logic'

import CancelButton from './library/CancelButton'

function CreatePodcast({ onPodcastCreated, onCancelClick }) {
    const [view, setView] = useState(null)
    const { showFeedback } = useContext()

    const handleSubmit = async event => {
        logger.debug('CreatePodcast → handleSubmit')
        event.preventDefault()

        const { title, file } = event.target.elements

        setView('loading')

        try {
            await logic.createPodcast(title.value, file.files[0])
            event.target.reset()
            onPodcastCreated()
        } catch (error) {
            showFeedback(error, 'error')
            setView(null)
        }
    }

    logger.debug('CreatePodcast → render')

    return (
        <section className="bg-white p-6">
            {view === 'loading' ? (
                <p>Uploading podcast...</p>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sky-900 font-semibold">Title</label>
                        <input
                            id="title"
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md placeholder-sky-900 focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                            placeholder="Enter title"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="file" className="block text-sky-900 font-semibold">File</label>
                        <input
                            id="file"
                            type="file"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md placeholder-sky-900 focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                            required
                        />
                    </div>
                    <div className="flex justify-between">
                        <CancelButton onClick={onCancelClick} />
                        <button
                            type="submit"
                            className="bg-blue-900 text-white rounded-full py-2 px-4 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50"
                        >
                            Create Podcast
                        </button>
                    </div>
                </form>
            )}
        </section>
    )
}

export default CreatePodcast
