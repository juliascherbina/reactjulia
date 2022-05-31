import { userAPI } from '../Api/Api'
import { updateObjectInArray } from '../utils/objectsHelpers'
let InitialState = {
    users: [],
    pageSize: 5,
    totalItemsCount: 0,
    currentPage: 5,
    portionSize:10,
    isFetching: false,
    isFollowing: []
}
const usersReducer = (state = InitialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users:updateObjectInArray(state.users, action.userId, 'id', { followed: true})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return { ...u, followed: true }
                //     }
                //     return u;
                // })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return { ...u, followed: false }
                //     }
                //     return u;
                // })
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_USER_TOTAL_COUNT: {
            return { ...state, totalItemsCount: action.count }
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

export const changePage = (pageNumber) => {
    return (dispatch) => {
        dispatch(setCurrentPage(pageNumber))
    }
}
export const GetUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        let response = await userAPI.GetUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.items));
        dispatch(setUserTotalCount(response.totalCount));
    }
}
const FollowUnfollowFlo = async (dispatch, userid, ApiMethod, ActionCreator) => {
    dispatch(toggleFollowingProgres(true, userid))
    let response = await ApiMethod(userid)
    if (response.resultCode == 0) {
        dispatch(ActionCreator(userid));
        dispatch(toggleFollowingProgres(false, userid))
    }
}
export const unfollow = (userid) => {
  return  async (dispatch) => {
      
        // let ApiMethod= userAPI.unfollow.bind(userAPI);
        // let ActionCreator=unfollowSuccess
        await FollowUnfollowFlo(dispatch, userid, userAPI.unfollow.bind(userAPI), unfollowSuccess)

    }
}
export const follow = (userid) => {
    return async (dispatch) => {
        await FollowUnfollowFlo(dispatch, userid, userAPI.Follow.bind(userAPI), followSuccess)

    }
}
export default usersReducer;