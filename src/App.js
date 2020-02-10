

import React from "react";
import Board from './components/Board/Board'

import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";

import './styles/style.sass';
export default function App (){
    
        return (
            <Router>
                <div className="app-container">
                    <Switch>
                        <Route  exact path="/itask/" component={HomePage} />
                        <Route  path="/itask/#/boards/:board" component={Board} />
                    </Switch>
                    <div className="window-overlay" id="window-overlay">

                    </div>
                </div>
            </Router>
        );
}


