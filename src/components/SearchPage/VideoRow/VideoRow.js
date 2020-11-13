import React from 'react';
import './VideoRow.css';

const VideoRow = ({views, subs, description, timestamp, channel, title, image}) => {
    return (
        <div className="videoRow">
            <img src={image} alt={title} />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="video__headline">{channel} <span>&middot;</span> {subs} subscribers <span>&middot;</span> {views} views <span>&middot;</span> {timestamp} ago</p>
                <p className="video__description">{description}</p>
            </div>
        </div>
    );
};

export default VideoRow;
