import { createSelector } from "reselect"





export const GetUsersSelector = (state) => {
    return state.usersPage.users
}
export const GetUsersfor = createSelector(GetUsersSelector, (users) => {
    return users.filter(u => true)
})
export const GetPageSize = (state) => {
    return state.usersPage.pageSize
}
export const GetTotalCount = (state) => {
    return state.usersPage.totalCount
}
export const GetCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const GetIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const GetIsFollowing = (state) => {
    return state.usersPage.isFollowing
}
