import s from './Post.module.css';
import {connect} from "react-redux";
import Post from "./Post";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
},mapDispatchToProps = (dispatch) => {
    return {

    }
}


const PostContainer = connect(mapStateToProps, mapDispatchToProps) (Post)

export default PostContainer;