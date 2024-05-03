import Navbar from "../components/Navbar";

export default function Podcast() {

    return (
        <div>
            <Navbar />
            <div className="Podcast">
                <h1>Title</h1>
                <h2>Date</h2>
                <div className="transcript-container">
                    <h2>transcript</h2>
                    <div className="transcript-text">transcript text 📝</div>
                </div>
                <div className="ideas">Ideas
                    <button>generate ideas</button>
                    <div className="ideas-list">ideas list</div>
                </div>

            </div>
        </div>
    )
}