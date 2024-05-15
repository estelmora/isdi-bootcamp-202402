import React from 'react'
import { useContext, logger } from '../utils'
import logic from '../logic'

function Podcast({ item: podcast, onEditClick, onViewClick, onDeleted }) {
    const { showFeedback, showConfirm } = useContext()

    const handleDeleteClick = podcastId => {
        logger.debug('Podcast → handleDeleteClick', podcastId)

        showConfirm('Delete podcast?', async confirmed => {
            if (confirmed) {
                try {
                    await logic.removePodcast(podcastId)
                    onDeleted(podcastId)
                } catch (error) {
                    showFeedback(error, 'error')
                }
            }
        })
    }

    const handleEditClick = podcast => {
        logger.debug('Podcast → handleEditClick')
        onEditClick(podcast)
    }

    const handleViewClick = podcast => {
        logger.debug('Podcast → handleViewClick')
        onViewClick(podcast)
    }

    logger.debug('Podcast → render')

    return (
        <article className="p-4 border rounded-lg shadow-sm bg-white">
            <div onClick={() => handleViewClick(podcast)} className="cursor-pointer mb-4">
                <h1 className="text-xl text-sky-900 font-semibold">{podcast.title}</h1>
                <time className="text-gray-500">{new Date(podcast.date).toLocaleString('en-CA')}</time>
            </div>
            <div className="flex space-x-2">
                <button
                    onClick={() => handleEditClick(podcast)}
                    className="rounded-full bg-blue-900 text-white py-2 px-4"
                >
                    Edit
                </button>
                <button
                    onClick={() => handleDeleteClick(podcast.id)}
                    className="rounded-full bg-blue-200 text-rose-400 py-2 px-4"
                >
                    Delete
                </button>
            </div>
        </article>
    )
}

export default Podcast
