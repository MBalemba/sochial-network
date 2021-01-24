import React from 'react';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    statePreload,
    unfollow
} from "../../redux/user-reducer";
import {connect} from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import preloader from '../../assets/image/loader.gif'
import Preloader from "../common/Preloader";

class UsersAPIComponent extends React.Component{

    componentDidMount() {
        debugger
        this.props.statePreload(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${1}&count=${this.props.pageSize}`).then(response => {
            debugger;
            this.props.statePreload(false);
            console.log(response);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanges = (pageNumber) => {
        this.props.statePreload(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {

            this.props.statePreload(false);
            console.log(response)
            this.props.setUsers(response.data.items);

        })
    }



    render() {
        return (<>

            {/*<Preloader isFetching = {this.props.isFetching}/>*/}
            <Users totalUsersCount = { this.props.totalUsersCount}
                   pageSize = {this.props.pageSize}
                   currentPage = {this.props.currentPage}
                   onPageChanges = {this.onPageChanges}
                   users = {this.props.users}
                   follow = {this.props.follow}
                   unfollow = {this.props.unfollow}

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
        isFetching: state.usersPage.isFetching
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
    }
    ) (UsersAPIComponent);
export default UsersContainer;