import React from 'react';
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/user-reducer";
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component{

    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            debugger;
            console.log(response)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    component() {

    }

    onPageChanges = (pageNumber) => {
        debugger
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            debugger;
            console.log(response)
            this.props.setUsers(response.data.items);

        })
    }



    render() {
        return (
            <Users totalUsersCount = { this.props.totalUsersCount}
                   pageSize = {this.props.pageSize}
                   currentPage = {this.props.currentPage}
                   onPageChanges = {this.onPageChanges}
                   users = {this.props.users}
                   follow = {this.props.follow}
                   unfollow = {this.props.unfollow}

            />
        )


    }
}

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) =>{
            dispatch(setTotalUsersCountAC(totalCount));
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersAPIComponent);
export default UsersContainer;