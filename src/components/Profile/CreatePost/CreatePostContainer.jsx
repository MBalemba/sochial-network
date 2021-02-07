import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import CreatePost from "./CreatePost";
import {connect} from "react-redux";
import Post from "../Post/Post";


//Идея контейнерной компоненты, быть оберткой для презентационной, хранит все данные и логику


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
    }
},mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            const newVar = updatePostTextActionCreator(text);
            dispatch(newVar);
        },
        addPost: (data) => {
            dispatch(addPostActionCreator(data));
        },
    }
}

const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps) (CreatePost);


export default CreatePostContainer;