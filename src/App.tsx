import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameInput from './components/nameInput/nameInput';

import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
     
    <div className="App">
      <div id="contentDiv">
        <Route path="/" component={NameInput} />
      </div>
    </div>
    </Router>
  );
}

export default App;
