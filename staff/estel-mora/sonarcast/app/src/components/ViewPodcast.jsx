import React, { useState, useEffect } from 'react'
import { useContext, logger } from '../utils'
import logic from '../logic'

function ViewPodcast({ podcast, onIdeasGenerated }) {
    const [view, setView] = useState(null)
    const [ideas, setIdeas] = useState(podcast.ideas || "Nothing to see here yet.")
    const { showFeedback } = useContext()

    useEffect(() => {
        setIdeas(podcast.ideas || "Nothing to see here yet.")
    }, [podcast])

    const handleIdeasClick = async () => {
        logger.debug('ViewPodcast → handleIdeasClick')
        setView('loading')

        try {
            const podcastId = podcast._id || podcast.id // es igual a id
            if (!podcastId) {
                logger.error('Podcast ID is missing or invalid: ', podcast)
                showFeedback("Couldn't find podcast.", 'error')
                setView(null)
                return
            }

            const updatedPodcast = await logic.editPodcastIdeas(podcastId)
            setView(null)
            onIdeasGenerated(updatedPodcast)
        } catch (error) {
            showFeedback(error, 'error')
            setView(null)
        }
    }

    logger.debug('ViewPodcast → render')

    return (
        <section className="flex justify-between items-start p-6 bg-white">
            <div className="flex-1 p-4 mr-4 bg-sky-50 overflow-auto">
                <h1 className="text-blue-900 text-xl font-bold">{podcast.title}</h1>
                <time className="block text-sky-900 mb-4">
                    {new Date(podcast.date).toLocaleString('en-CA')}
                </time>
                <h2 className="text-blue-900 font-semibold">Transcript</h2>
                <div className="mt-2 p-4 bg-white rounded-md shadow-sm min-h-[200px] text-sm">
                    {podcast.transcript}
                </div>
            </div>

            <div className="flex-1 p-4 bg-sky-50 overflow-auto">
                <div className="flex justify-between items-center">
                    <h1 className="text-blue-900 font-bold text-xl">Ideas</h1>
                    <button
                        onClick={handleIdeasClick}
                        className="px-4 py-2 bg-sky-900 text-white rounded-full hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-opacity-50 transition ease-in-out duration-300"
                    >
                        🪄 Generate ideas
                    </button>
                </div>
                <div className="mt-2 p-4 bg-white rounded-md shadow-sm min-h-[200px] text-sm">
                    {view === 'loading' ? "Generating ideas..." : ideas}
                </div>
            </div>
        </section>
    )
}

export default ViewPodcast
