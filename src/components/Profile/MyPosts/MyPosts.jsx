import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import CreatePost from "./CreatePost/CreatePost";
import CreatePostContainer from "./CreatePost/CreatePostContainer";
import PostContainer from "./Post/PostContainer";

const MyPosts = (props) => {
    console.log(props)
    debugger;
  return (
    <div>

        <CreatePostContainer/>
        <PostContainer />

    </div>
  );
}


export default MyPosts;