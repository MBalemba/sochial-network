const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const CHANGE_STATE_PRELOAD = 'CHANGE_STATE_PRELOAD';
const initialState = {
    users: [
    ],
    pageSize: 70,
    totalUsersCount: 20,
    currentPage: 0,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {
    debugger;
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
export default usersReducer;
