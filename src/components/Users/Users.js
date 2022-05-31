import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({ currentPage, pagesCount, totalItemsCount, pageSize,portionSize, onPageChanged, ...props }) => {
    return <div>
        <Paginator currentPage={currentPage}
            pagesCount={pagesCount}
            onPageChanged={onPageChanged}
            totalItemsCount={totalItemsCount}
            pageSize={pageSize}
            portionSize={portionSize} />
        <div>
            {
                props.users.map(u =>
                    <User isFollowing={props.isFollowing}
                        unfollow={props.unfollow}
                        follow={props.follow}
                        user={u} key={u.id}
                    />)
            }
        </div>
    </div>
}
export default Users