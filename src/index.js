import React, { Component } from 'react';
import { render } from 'react-dom';

import { Header } from "./components/Header";
import { Home } from "./components/Home";

//make a component
class App extends Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                    <Header />
                    </div>
                </div>
                <p>Test</p>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                    <Home />
                    </div>
                </div>
            </div>
        );
    }
}

//Tell it to display
render (<App/>, document.getElementById('root'));