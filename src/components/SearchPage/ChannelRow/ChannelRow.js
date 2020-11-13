import { Avatar } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import React from 'react';
import './ChannelRow.css';

const ChannelRow = ({image, channel, verified, subs, noOfVideos, description}) => {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={channel} src={image} />

            <div className="channel__info">
                <div className="channelRow__text">
                    <h4>
                        {channel}
                        {verified &&  <CheckCircleIcon />}
                    </h4>
                    <p className="channel__analytics">{subs} subscriberss &middot; {noOfVideos} videos</p>
                    <p>{description}</p>               
                </div>

                <button className="subscribe__btn">Subscribe</button>

            </div>
        </div>
    )
}

export default ChannelRow
