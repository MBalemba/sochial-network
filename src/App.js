import React from 'react'; 
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom"
import {updateNewText} from "./redux/redux";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props)=> {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div class = 'app-wrapper-content'>
          <Route path='/Messages' render = { () => <DialogsContainer  dialogsPage={props.state.dialogsPage} dispatch = {props.dispatch}/>} />
          <Route path='/Profile' render = {() => <Profile profilePage ={props.state.profilePage} dispatch = {props.dispatch} />} />
          <Route exact path='/' render = {() => <Profile profilePage={props.state.profilePage} dispatch = {props.dispatch} />}/>
      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
  