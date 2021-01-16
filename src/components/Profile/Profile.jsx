import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = (props) => {
    debugger;
  return (
    <div className= {s.content}>
      <img class={s.img} src='https://i.ytimg.com/vi/-U0rlGJcgCw/maxresdefault.jpg' />
      <MyPosts profilePage = {props.profilePage} dispatch = {props.dispatch} />
    </div>
  );
}


export default Profile;