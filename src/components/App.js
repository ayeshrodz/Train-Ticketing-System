import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Landing from './Landing';
import Search from './Search';
import "../css/App.css";

function App() {
  return (
    <div className = "App container-fluid">
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component = {Landing}/>
          <Route exact path = "/search" component ={Search}/>
        </Switch>
      </BrowserRouter>
    </div>
    
  )
}

export default App;
