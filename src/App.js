import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import './style.css';

import LogoComponent from './components/Logo';
import BrandComponent from './components/Brand';
import HomeComponent from './components/Home';
import NotFoundComponent from './components/NotFound';

class App extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    < Route path="/" exact component={HomeComponent} />
                    <Route path="/brand" exact component={BrandComponent} />
                    <Route path="/logo" exact component={LogoComponent} />
                    <Route component={NotFoundComponent} />
                </Switch>
            </Router >
        )
    }
}

export default App;