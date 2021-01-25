
import s from './Profile.module.css';
import CreatePostContainer from "./CreatePost/CreatePostContainer";
import PostContainer from "./Post/PostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div className= {s.content}>
        <ProfileInfo profile = {props.profile}/>
        <CreatePostContainer/>
        <PostContainer />
    </div>
  );
};


export default Profile;