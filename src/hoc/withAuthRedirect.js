import * as React from "react";
import {Redirect} from "react-router-dom";
import Dialogs from "../components/Dialogs/Dialogs";
import {connect} from "react-redux";


export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth){
                return <Redirect to={'/login'} />
            }
            return <Component {...this.props}/>
        }
    }

    let mapStateToPropsForRedirect = (state) => ({
        isAuth: state.auth.isAuth
    });

    let AutRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return AutRedirectComponent;

}