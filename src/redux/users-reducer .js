import {userAPI} from '../Api/Api'
let InitialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 5,
    isFetching: false,
    isFollowing: []
}
const usersReducer = (state = InitialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_USER_TOTAL_COUNT: {
            return { ...state, totalCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state,
                isFollowing: action.isFetching ?
                    [...state.isFollowing, action.userid]
                    : [state.isFollowing.filter(id => id != action.userid)]
            }
        }
        default:
            return state
    }
}
export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUserTotalCount = (totalUserCount) => ({ type: SET_USER_TOTAL_COUNT, count: totalUserCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgres = (isFetching, userid) => ({ type: TOGGLE_IS_FOLLOWING, isFetching, userid })
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USER_TOTAL_COUNT = 'SET_USER_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

export const changePage = (pageNumber) =>{
    return (dispatch) =>{
        dispatch(setCurrentPage(pageNumber))
    }
}

export const GetUsers=(currentPage, pageSize) =>{ 
    return (dispatch) => {
    dispatch(toggleIsFetching(true))
    userAPI.GetUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items));
        dispatch(setUserTotalCount(data.totalCount));
    })
}}
export const unfollow=(userid)=>{
    return (dispatch)=>{
        dispatch(toggleFollowingProgres(true,userid))
        userAPI.unfollow(userid)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unfollowSuccess(userid));
                    dispatch(toggleFollowingProgres(false, userid))
                }
            })
    }
}
export const follow=(user)=>{
    return (dispatch)=>{
        dispatch(toggleFollowingProgres(true,user))
        userAPI.Follow(user)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(followSuccess(user));
                    dispatch(toggleFollowingProgres(false, user))
                }
            })
    }
}
export default usersReducer;