import Avatar from '@material-ui/core/Avatar';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__left">
                <MenuIcon />
                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="Youtube"/>
            </div>
            <div className="header__middle">
                <input type="text" placeholder="Search" />
                <SearchIcon />
            </div>
            <div className="header__right">
                <VideoCallIcon className="header__right-icon" />
                <AppsIcon className="header__right-icon" />
                <NotificationsActiveIcon className="header__right-icon" />
                <Avatar />
            </div>
        </header>
    )
}

export default Header
