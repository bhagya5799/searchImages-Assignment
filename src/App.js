
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import ProtectRoute from './Components/ProtectRoute'
import Gallery from './Components/Gallery';
import Profile from './Components/Profile'
import './App.css';
import Maps  from './Components/Maps';

function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/login">{<Login />}</Route>
        <Route exact path="/signup/:status">{<SignUp />}</Route>
        <Route exact path="/gallery">{<Gallery />}</Route>
        <Route exact path ="/" >{<Home/>}</Route>
        <Route exact path="/maps" >{<Maps />}</Route>
        <Route exact path="/profile" >{<Profile />}</Route>
    </Switch>
    </BrowserRouter>
  
  );
}
export default App;
