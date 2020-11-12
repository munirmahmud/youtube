import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import RecommendedVideos from './components/Videos/RecommendedVideos';

const App = () => {
    return (
        <>
            <Header />
            <div className="app__body">
                <Sidebar />
                <RecommendedVideos />
            </div>
        </>
    )
}

export default App
