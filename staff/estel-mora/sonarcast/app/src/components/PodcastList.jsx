import React, { useState, useEffect } from 'react'
import { useContext, logger } from '../utils'
import logic from '../logic'

import Podcast from './Podcast'

function PodcastList({ stamp, onEditPodcastClick, onViewPodcastClick }) {
    const [podcasts, setPodcasts] = useState([])
    const { showFeedback } = useContext()

    useEffect(() => {
        const loadPodcasts = async () => {
            logger.debug('PodcastList → loadPodcasts')

            try {
                const retrievedPodcasts = await logic.retrievePodcasts()
                setPodcasts(retrievedPodcasts)
            } catch (error) {
                showFeedback(error, 'error')
            }
        }

        loadPodcasts()
    }, [stamp, showFeedback])

    const handlePodcastDeleted = podcastId => {
        logger.debug('PodcastList → handlePodcastDeleted', podcastId)

        try {
            setPodcasts(prevPodcasts => prevPodcasts.filter(p => p.id !== podcastId))
            logger.info('Successfully filtered out deleted podcast.')
        } catch (error) {
            logger.error('Error filtering out deleted podcast:', error)
            showFeedback(error, 'error')
        }
    }

    logger.debug('PodcastList → render')

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mx-auto max-w-7xl">
            {podcasts.map(podcast => (
                <Podcast
                    key={podcast.id}
                    item={podcast}
                    onViewClick={onViewPodcastClick}
                    onEditClick={onEditPodcastClick}
                    onDeleted={handlePodcastDeleted}
                />
            ))}
        </section>
    )
}

export default PodcastList
