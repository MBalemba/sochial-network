import React from 'react'; 
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader";
import preloader from "./assets/image/loader.gif";

class App extends React.Component {

    componentDidMount(){
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized){
            debugger
            return <img src={preloader} alt={'wedwq'} width={'100%'} height={'100%'}/>
        }

        return (

                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div class='app-wrapper-content'>
                        <Route path='/Messages'
                               render={() => <DialogsContainer dialogsPage={this.props.state.dialogsPage}
                                                               dispatch={this.props.dispatch}/>}/>
                        <Route path='/profile/:useId?'
                               render={() => <ProfileContainer profilePage={this.props.state.profilePage}
                                                               dispatch={this.props.dispatch}/>}/>
                        <Route exact path='/' render={() => <ProfileContainer profilePage={this.props.state.profilePage}
                                                                              dispatch={this.props.dispatch}/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>

                </div>

        );
    }
}

const mapStatetoProps = (state)=>({
    initialized: state.app.initialized
})

export default compose(
connect(mapStatetoProps, {initializeApp}))
(App);
  