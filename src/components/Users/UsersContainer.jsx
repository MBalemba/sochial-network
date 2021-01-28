import React from 'react';
import {
    buttonPressFollow,
    follow, getUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    statePreload, toggleIsFollowingProgress,
    unfollow
} from "../../redux/user-reducer";
import {connect} from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader";
import {userAPI} from "../../api/api";

class UsersAPIComponent extends React.Component{

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

        // this.props.statePreload(true);
        //
        // userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.statePreload(false);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // })

    }

    onPageChanges = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize);
        // this.props.setCurrentPage(pageNumber);
        //
        // this.props.statePreload(true);
        // userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //
        //     this.props.statePreload(false);
        //     this.props.setUsers(data.items);
        //
        // })

    }



    render() {
        return (<>

            <Preloader isFetching = {this.props.isFetching}/>
            <Users totalUsersCount = { this.props.totalUsersCount}
                   pageSize = {this.props.pageSize}
                   currentPage = {this.props.currentPage}
                   onPageChanges = {this.onPageChanges}
                   users = {this.props.users}
                   follow = {this.props.follow}
                   unfollow = {this.props.unfollow}
                   followingInProgress = {this.props.followingInProgress}
                   toggleIsFollowingProgress = {this.props.toggleIsFollowingProgress}
                   buttonPressFollow = {this.props.buttonPressFollow}

            />


            </>
        )


    }
}

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
};

//Долгий способ прокидывания пропсов
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(follow(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollow(userId))
        },
        setUsers: (users) => {
            dispatch(setUsers(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPage(currentPage))
        },
        setTotalUsersCount: (totalCount) =>{
            dispatch(setTotalUsersCount(totalCount));
        },
        Preload: (bool) =>{
            dispatch(statePreload(bool));
        }
    }
}


const UsersContainer = connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        statePreload,
        toggleIsFollowingProgress,
        getUsers,
        buttonPressFollow
    }
    ) (UsersAPIComponent);
export default UsersContainer;