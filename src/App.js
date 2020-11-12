import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
    return (
        <>
            <Header />
            <div className="app__body">
                <Sidebar />
            </div>
        </>
    )
}

export default App
