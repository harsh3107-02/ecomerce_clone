import React from "react"
// import ReactDOM from "react-dom"
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './checkout';
import Header2 from './header2'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import checkout from "./checkout";

function App() {
  return (
    <Router>
      <div className="app">
      <Header/>
      <Header2/>
        <Switch>
          <Route path="/checkout">
            {/* <Header/> */}
            <Checkout/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
