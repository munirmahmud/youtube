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

            <VideoRow 
                views="44k"
                subs="45k"
                description="The following npm package, @material-ui/icons, includes the 1,100+ official Material icons converted to SvgIcon components."
                timestamp="2"
                channel="Clever Programmer"
                title="The Resume That Got Me Into Google and Microsoft (Reviewing your Resumes LIVE)"
                image="https://i.ytimg.com/vi/kUi1JIp7eVk/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCesGteZ48a6yD8LAYKvdxEqfcbjA"
            />
        </div>
    );
};

export default SearchPage;
