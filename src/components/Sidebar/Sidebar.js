import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow/SidebarRow';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />

            <hr />

            <SidebarRow Icon={HomeIcon} title="Library" />
            <SidebarRow Icon={HomeIcon} title="History" />
            <SidebarRow Icon={HomeIcon} title="Your videos" />
            <SidebarRow Icon={HomeIcon} title="Your Movies" />
            <SidebarRow Icon={HomeIcon} title="Watch later" />
        </aside>
    )
}

export default Sidebar
