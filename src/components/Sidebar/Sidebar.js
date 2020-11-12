import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow/SidebarRow';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <SidebarRow title="Home" />
            <SidebarRow title="Trending" />
            <SidebarRow title="Subscription" />

            <hr />

            <SidebarRow title="Library" />
            <SidebarRow title="History" />
            <SidebarRow title="Your videos" />
            <SidebarRow title="Your Movies" />
            <SidebarRow title="Watch later" />
        </aside>
    )
}

export default Sidebar
