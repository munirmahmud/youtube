import Avatar from '@material-ui/core/Avatar';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <header className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="Youtube"/>
                </Link>
            </div>
            <div className="header__middle">
                <input type="text" placeholder="Search" value={inputSearch} onChange={e => setInputSearch(e.target.value)} />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon />            
                </Link>
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
