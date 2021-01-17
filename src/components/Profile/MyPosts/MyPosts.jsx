import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import CreatePost from "./CreatePost/CreatePost";
import CreatePostContainer from "./CreatePost/CreatePostContainer";

const MyPosts = (props) => {
    console.log(props)
    debugger;
  return (
    <div>

        <CreatePostContainer newPostText = {props.profilePage.newPostText} dispatch = {props.dispatch}/>

       {props.profilePage.posts.map((elem) =>  <Post obj = {elem} /> )}

    </div>
  );
}


export default MyPosts;