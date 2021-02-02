import React from 'react'; 
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props)=> {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <HeaderContainer/>
      <Navbar/>
      <div  class = 'app-wrapper-content'>
          <Route path='/Messages' render = { () => <DialogsContainer  dialogsPage={props.state.dialogsPage} dispatch = {props.dispatch}/>} />
          <Route path='/profile/:useId?' render = {() => <ProfileContainer profilePage ={props.state.profilePage} dispatch = {props.dispatch} />} />
          <Route exact path='/' render = {() => <ProfileContainer profilePage={props.state.profilePage} dispatch = {props.dispatch} />}/>
          <Route path='/users' render = {() => <UsersContainer /> }/>
          <Route path='/login' render = {() => <Login />}/>
      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
  