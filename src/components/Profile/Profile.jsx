import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className= {s.content}>
      <img class={s.img} src='https://i.ytimg.com/vi/-U0rlGJcgCw/maxresdefault.jpg' />
      <MyPosts />
    </div>
  );
}


export default Profile;