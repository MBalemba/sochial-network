
import * as React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {

  componentDidMount() {
      let useId = this.props.match.params.useId;
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${useId?useId:'2'}`).then(response => {
          debugger;
          this.props.setUserProfile(response.data);
      })
    }

    render (){

    return(
        <Profile {...this.props} profile = {this.props.profile}/>

    )
  }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let withUrlContainerComponent = withRouter(ProfileContainer)

export default connect (mapStateToProps,{setUserProfile})(withUrlContainerComponent);