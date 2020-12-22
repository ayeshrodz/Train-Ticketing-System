import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Landing from './Landing/Landing';
import Search from './Search/Search';
import Signup from './auth/Signup'
import "./css/App.css"

function App() {
  return (
    <div className = "App container-fluid">
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component = {Landing}/>
          <Route exact path = "/search" component ={Search}/>
          <Route exact path = "/sign-up" component = {Signup}/>
        </Switch>
      </BrowserRouter>
    </div>
    
  )
}

export default App;
