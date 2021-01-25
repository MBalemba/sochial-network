import s from "./ProfileInfo.module.css";

let ProfileInfo = (props) => {
    debugger

    if(props.profile.photos === null){
        alert('yES');
    }

    return(
        <div>
            <img className={s.img} src={(props.profile.photos === undefined) ? ' ': (props.profile.photos.large === null) ? ('https://i007.fotocdn.net/s123/2950fc2e1fadccab/user_xl/2816616767.jpg'): (props.profile.photos.large)}/>
        </div>
    );
};

export default ProfileInfo