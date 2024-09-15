import React from 'react';
import './VideoPlayer.css'; // Import CSS for styling

function VideoPlayer({ videoUrl }) {
    return (
        <div className="video-player">
            <video controls>
                <source src={videoUrl} type="video/mp4" />
                <source src={videoUrl} type="video/mp4" />
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoPlayer;
