import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import React from 'react';
import ChannelRow from './ChannelRow/ChannelRow';
import './SearchPage.css';
import VideoRow from './VideoRow/VideoRow';

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>Filter</h2>
            </div>

            <ChannelRow 
                image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Munir Mahmud"
                verified
                subs="444k"
                noOfVideos={776}
                description="A set of reusable components for design tools is available, designed to match the React components, and to help you craft great products"
            />

            <VideoRow />
        </div>
    );
};

export default SearchPage;
