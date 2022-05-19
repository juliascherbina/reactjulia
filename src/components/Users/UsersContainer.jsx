import React from "react";
import { connect } from "react-redux";
import {
    follow, changePage, unfollow, toggleFollowingProgres, GetUsers, Follow, Unfollow
} from "../../redux/users-reducer ";
import Users from "./Users";

import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { WithAuthRedirect } from "../../Hoc/WithAuthRedirect";
import { GetCurrentPage, GetIsFetching, GetUsersfor, GetIsFollowing, GetPageSize, GetTotalCount } from "../../redux/users-Selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.GetUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.changePage(pageNumber);
        this.props.GetUsers(pageNumber, this.props.pageSize);
    }
    render() {


        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFollowing={this.props.isFollowing}



            />
        </>
    }
}
// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalCount: state.usersPage.totalCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         isFollowing: state.usersPage.isFollowing
//     }
// }
let mapStateToProps = (state) => {
    return {
        users: GetUsersfor(state),
        pageSize: GetPageSize(state),
        totalCount: GetTotalCount(state),
        currentPage: GetCurrentPage(state),
        isFetching: GetIsFetching(state),
        isFollowing: GetIsFollowing(state)
    }
}
 export default compose(//WithAuthRedirect,
    connect(mapStateToProps, {
        follow, unfollow, changePage,
        toggleFollowingProgres, GetUsers
    })
)(UsersContainer);



// export default WithAuthRedirect(connect(mapStateToProps, {
//     follow, unfollow, changePage,
//     toggleFollowingProgres, GetUsers
// })(UsersContainer));

