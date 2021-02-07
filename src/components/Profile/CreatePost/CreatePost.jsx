import s from './CreatePost.module.css';
import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength = maxLengthCreator(30);

function PostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
        <div className={s.createPostBody}>
            <Field validate={[required,maxLength]}
                  placeholder={'asdfsd'} component={Textarea} className={s.createPostInput} name={'newPostText'} />
        </div>

        <div className={s.createPostFooter}>
            <button className={s.tag}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.75 3.75H2.25C1.83516 3.75 1.5 4.08516 1.5 4.5V19.5C1.5 19.9148 1.83516 20.25 2.25 20.25H21.75C22.1648 20.25 22.5 19.9148 22.5 19.5V4.5C22.5 4.08516 22.1648 3.75 21.75 3.75ZM20.8125 18.5625H3.1875V17.6273L6.43359 13.7766L9.95156 17.9484L15.4242 11.4609L20.8125 17.85V18.5625ZM20.8125 15.5203L15.5672 9.3C15.4922 9.21094 15.3562 9.21094 15.2812 9.3L9.95156 15.6188L6.57656 11.618C6.50156 11.5289 6.36562 11.5289 6.29062 11.618L3.1875 15.2977V5.4375H20.8125V15.5203Z"
                        fill="#1890FF"></path>
                    <path
                        d="M9.95156 17.9484L6.43359 13.7766L3.1875 17.6273V18.5625H20.8125V17.85L15.4242 11.4609L9.95156 17.9484Z"
                        fill="#E6F7FF"></path>
                    <path
                        d="M3.1875 15.2977L6.29062 11.618C6.36562 11.5289 6.50156 11.5289 6.57656 11.618L9.95156 15.6188L15.2812 9.3C15.3562 9.21094 15.4922 9.21094 15.5672 9.3L20.8125 15.5203V5.4375H3.1875V15.2977ZM7.125 6.5625C7.39585 6.5625 7.66405 6.61585 7.91428 6.7195C8.16452 6.82315 8.39189 6.97507 8.58341 7.16659C8.77493 7.35811 8.92685 7.58548 9.0305 7.83572C9.13415 8.08595 9.1875 8.35415 9.1875 8.625C9.1875 8.89585 9.13415 9.16405 9.0305 9.41428C8.92685 9.66452 8.77493 9.89189 8.58341 10.0834C8.39189 10.2749 8.16452 10.4269 7.91428 10.5305C7.66405 10.6342 7.39585 10.6875 7.125 10.6875C6.57799 10.6875 6.05339 10.4702 5.66659 10.0834C5.2798 9.69661 5.0625 9.17201 5.0625 8.625C5.0625 8.07799 5.2798 7.55339 5.66659 7.16659C6.05339 6.7798 6.57799 6.5625 7.125 6.5625Z"
                        fill="#E6F7FF"></path>
                    <path
                        d="M6.46875 8.625C6.46875 8.79905 6.53789 8.96597 6.66096 9.08904C6.78403 9.21211 6.95095 9.28125 7.125 9.28125C7.29905 9.28125 7.46597 9.21211 7.58904 9.08904C7.71211 8.96597 7.78125 8.79905 7.78125 8.625C7.78125 8.45095 7.71211 8.28403 7.58904 8.16096C7.46597 8.03789 7.29905 7.96875 7.125 7.96875C6.95095 7.96875 6.78403 8.03789 6.66096 8.16096C6.53789 8.28403 6.46875 8.45095 6.46875 8.625Z"
                        fill="#E6F7FF"></path>
                    <path
                        d="M7.125 10.6875C7.39585 10.6875 7.66405 10.6342 7.91428 10.5305C8.16452 10.4269 8.39189 10.2749 8.58341 10.0834C8.77493 9.89189 8.92685 9.66452 9.0305 9.41428C9.13415 9.16405 9.1875 8.89585 9.1875 8.625C9.1875 8.35415 9.13415 8.08595 9.0305 7.83572C8.92685 7.58548 8.77493 7.35811 8.58341 7.16659C8.39189 6.97507 8.16452 6.82315 7.91428 6.7195C7.66405 6.61585 7.39585 6.5625 7.125 6.5625C6.57799 6.5625 6.05339 6.7798 5.66659 7.16659C5.2798 7.55339 5.0625 8.07799 5.0625 8.625C5.0625 9.17201 5.2798 9.69661 5.66659 10.0834C6.05339 10.4702 6.57799 10.6875 7.125 10.6875ZM7.125 7.96875C7.48828 7.96875 7.78125 8.26172 7.78125 8.625C7.78125 8.98828 7.48828 9.28125 7.125 9.28125C6.76172 9.28125 6.46875 8.98828 6.46875 8.625C6.46875 8.26172 6.76172 7.96875 7.125 7.96875Z"
                        fill="#1890FF"></path>
                </svg>
                <span className>Photo/Video</span>
            </button>

            <button className={s.tag}>
                <span>Send</span>
            </button>

        </div>
    </form>)
}

PostForm = reduxForm({form: "ProfileForm"})(PostForm);

const CreatePost = (props) => {
    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        // const newVar = updatePostTextActionCreator(text);
        // props.dispatch(newVar);
    }
  return (
        <div className={s.createPost}>

            <div className={s.createPostHeader}>
                <h4 className={s.createPostTitle}>
                    Create post
                </h4>
            </div>

            <PostForm onSubmit={onAddPost} />

        </div>
  );
}




export default CreatePost;