import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Home from './Home';

const Root = () => (
    <div> 
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    </div>
)

export default Root;