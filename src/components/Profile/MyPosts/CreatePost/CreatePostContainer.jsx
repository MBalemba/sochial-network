import s from './CreatePost.module.css';
import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../../redux/profile-reducer";
import CreatePost from "./CreatePost";

//Идея контейнерной компоненты, быть оберткой для презентационной, хранит все данные и логику

const CreatePostContainer = (props) => {
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        const newVar = updatePostTextActionCreator(text);
        props.dispatch(newVar);
    }
  return ( <CreatePost newPostText = {props.newPostText} updateNewPostText = {onPostChange} addPost = {addPost}/>);
}


export default CreatePostContainer;