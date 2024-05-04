import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import { API_URL } from "../logic/config";

interface Podcast {
    title: string;
    transcript: string;
    date: Date | null;
}

export default function Podcast() {

    const { podcastId } = useParams();
    const [podcast, setPodcast] = useState<Podcast>({
        title: '',
        transcript: '',
        date: null
    })

    useEffect(() => {
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

    async function generateIdeas() {
        // Cridar OpenAI amb podcast.transcript i prompt
        // Fer PATCH a /podcast/{podcastId} amb { ideas: ideas }
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
                    {/* <button onClick={generateIdeas()}>generate ideas</button> */}
                    <div className="ideas-list">ideas list</div>
                </div>

            </div>
        </div>
    )
}