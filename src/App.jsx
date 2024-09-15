import React, { useState } from 'react';
import VideoList from './components/VideoListings.jsx';
import VideoPlayer from './components/VideoPlayer.jsx';
import './App.css'; // Import CSS for responsiveness

function App() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    // Sample video data for the VideoList
    const videos = [
        { id: 1, title: 'Video kramank 1' , url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
        { id: 2, title: 'Video kramank 2' , url: 'https://www.w3schools.com/html/movie.mp4' },
        { id: 3, title: 'Video kramank 3' , url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    ];

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    return (
        <div className="app-container">
            <h1 className="app-header">StreamNest - Video Streaming Service</h1>
            <div className="content-container">
                <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
                {selectedVideo && (
                    <div className="video-player-container">
                        <h2 className="now-playing">Now Playing: {selectedVideo.title}</h2>
                        <VideoPlayer videoUrl={selectedVideo.url} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
