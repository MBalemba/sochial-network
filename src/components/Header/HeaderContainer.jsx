import {connect} from "react-redux";
import React from 'react'
import Header from "./Header";
import * as axios from 'axios';
import {resetUserData, setAuthUserData} from "../../redux/auth-reducer";
import {headerAPI} from "../../api/api";



class HeaderContainer extends React.Component {

    componentDidMount(){
        this.props.resetUserData();
    }


    render() {
        return <Header {...this.props}/>
    };
};

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login:  state.auth.login

})

export default connect (mapStateToProps, {resetUserData}) (HeaderContainer);