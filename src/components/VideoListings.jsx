import React from 'react';
import './VideoListings.css'; // Import CSS for styling

function VideoList({ videos, onVideoSelect }) {
    return (
        <div className="video-list">
            <h2>Available Videos</h2>
            <ul>
                {videos.map((video) => (
                    <li
                        key={video.id}
                        onClick={() => onVideoSelect(video)}
                        className="video-item"
                    >
                        <h3>{video.title}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default VideoList;
