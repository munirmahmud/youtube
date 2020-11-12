import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import RecommendedVideos from './components/Videos/RecommendedVideos';

const App = () => {
    return (
        <>
            <Router>
                <Header />

                <Switch>
                    <Route path="/search/:searchTerm">
                        <div className="app__body">
                            <Sidebar />
                            <h1>Search page</h1>
                        </div>
                    </Route>
                    <Route path="/">
                        <div className="app__body">
                            <Sidebar />
                            <RecommendedVideos />
                        </div>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App
