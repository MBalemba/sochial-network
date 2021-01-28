import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const CHANGE_STATE_PRELOAD = 'CHANGE_STATE_PRELOAD';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGLE_IS_FOLLOWIN_PROGRESS';

const initialState = {
    users: [
    ],
    pageSize: 100,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE :
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT :
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case CHANGE_STATE_PRELOAD :
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS :
            return {
                ...state,
                followingInProgress : action.followingInProgress
                    ? [...state.followingInProgress,  action.userId]
                    : [...state.followingInProgress.filter(id => id != action.userId)]
            }
        default:
            return state;
    }

}




export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId,
    }
}
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId,
    }
}
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount})
export const statePreload = (bool) => ({type: CHANGE_STATE_PRELOAD, isFetching: bool})
export const toggleIsFollowingProgress = (bool, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress: bool, userId: userId})


export const getUsers = (currentPage, pageSize) => {
   return (dispatch) => {

       dispatch(setCurrentPage(currentPage));
       dispatch(statePreload(true));

        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(statePreload(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}

export const buttonPressFollow = (userId, request, typeFollow) => {

    return (dispatch) => {
    debugger
        dispatch(toggleIsFollowingProgress(true, userId));
        userAPI.clickButton(userId, request).then((response) => {
            debugger
            if (response.data.resultCode === 0) {
                if(typeFollow === 'unfollow'){
                    dispatch(unfollow(userId))
                } else if (typeFollow === 'follow'){
                    dispatch(follow(userId))
                }
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        })
    }
}

export default usersReducer;


