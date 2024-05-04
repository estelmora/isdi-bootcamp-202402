import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import { API_URL } from "../logic/config";

export default function Podcast() {

    const { podcastId } = useParams();
    const [podcast, setPodcast] = useState({
        title: '',
        transcript: ''
    })

    useEffect(() => {
        const fetchPodcast = async () => {
            try {
                const { data } = await axios.get(`${API_URL}/podcasts/${podcastId}`)
                setPodcast(data)
            } catch (error) {
                console.error('Error fetching podcast:', error)
            }
        }

        fetchPodcast()
    }, [podcastId])

    return (
        <div>
            <Navbar />
            <div className="Podcast">
                <h1>{podcast.title}</h1>
                <h2>Date</h2>
                <div className="transcript-container">
                    <h2>Transcript</h2>
                    <div className="transcript-text">{podcast.transcript}</div>
                </div>
                <div className="ideas">Ideas
                    <button>generate ideas</button>
                    <div className="ideas-list">ideas list</div>
                </div>

            </div>
        </div>
    )
}