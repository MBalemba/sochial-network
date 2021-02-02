import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus"
import {updateStatus} from "../../../redux/profile-reducer";
let ProfileInfo = (props) => {
    return(
        <div>
            <img className={s.img} src={(props.profile.photos === undefined) ? ' ': (props.profile.photos.large === null) ? ('https://i007.fotocdn.net/s123/2950fc2e1fadccab/user_xl/2816616767.jpg'): (props.profile.photos.large)}/>
            <ProfileStatus updateStatus = {props.updateStatus} {...props.profile} status = {props.status}/>
        </div>
    );
};

export default ProfileInfo