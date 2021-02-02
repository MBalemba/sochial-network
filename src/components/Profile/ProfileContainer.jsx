import * as React from "react";
import {connect} from "react-redux";
import {dispatchProfileData, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from "react-router";
import {profileAPI} from "../../api/api";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Dialogs from "../Dialogs/Dialogs";

class ProfileContainer extends React.Component {

  componentDidMount() {
      let useId = this.props.match.params.useId;
      this.props.dispatchProfileData(useId);

      // profileAPI.getProfileData(useId).then(response => {
      //     this.props.setUserProfile(response.data);
      // })
    }

    render (){
    return(
        <Profile {...this.props} status = {this.props.status} profile = {this.props.profile}/>

    )
  }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});




export default compose(
    connect(mapStateToProps, {setUserProfile, dispatchProfileData, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);