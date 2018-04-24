import React, { Component } from 'react';

import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import Surveys from './components/Surveys';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <Nav/>

                    <div className="container">
                        <Surveys />
                    </div>

                    <Footer/>
                </div>  
            </div>
        );
    }
}

export default App;

