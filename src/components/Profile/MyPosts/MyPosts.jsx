import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import CreatePost from "./CreatePost/CreatePost";

const MyPosts = (props) => {
    console.log(props)
    debugger;
  return (
    <div>

        <CreatePost newPostText = {props.profilePage.newPostText} updateNewText = {props.updateNewText} func ={props.func}/>

       {props.profilePage.posts.map((elem) =>  <Post obj = {elem} /> )}

    </div>
  );
}


export default MyPosts;