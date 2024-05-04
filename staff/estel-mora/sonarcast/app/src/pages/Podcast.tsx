import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import { API_URL } from "../logic/config";

import { updatePodcast } from "../logic/updatePodcast";

interface Podcast {
    title: string;
    transcript: string;
    date: Date | null;
    ideas?: string;
}

export default function Podcast() {

    const { podcastId } = useParams<{ podcastId?: string }>();
    const [podcast, setPodcast] = useState<Podcast>({
        title: '',
        transcript: '',
        date: null,
        ideas: ''
    })

    useEffect(() => {
        if (!podcastId) return

        const fetchPodcast = async () => {
            try {
                const { data } = await axios.get(`${API_URL}/podcasts/${podcastId}`)
                if (data.date) {
                    data.date = new Date(data.date);
                }
                setPodcast(data)
            } catch (error) {
                console.error('Error fetching podcast:', error)
            }
        }

        fetchPodcast()
    }, [podcastId])

    async function handleUpdatePodcast(podcastId: string) {
        await updatePodcast(podcastId)
    }

    return (
        <div>
            <Navbar />
            <div className="Podcast">
                <h1>{podcast.title}</h1>
                <h2>{podcast.date
                    ? podcast.date.toDateString()
                    : "Loading date..."}</h2>
                <div className="transcript-container">
                    <h2>Transcript</h2>
                    <div className="transcript-text">{podcast.transcript}</div>
                </div>
                <div className="ideas">Ideas
                    {podcastId && (
                        <button onClick={() => handleUpdatePodcast(podcastId)}>Generate Ideas</button>
                    )}
                    <div className="ideas-list">{podcast.ideas ? podcast.ideas : "Nothing to see here."}</div>
                </div>

            </div>
        </div>
    )
}