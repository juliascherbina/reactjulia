import React from 'react';
import styles from './Paginator.module.css'


let Paginator = ({ totalCount, pageSize, currentPage, onPageChanged }) => {

    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages = []
    for (let i = Math.max(currentPage - 3, 0); i <= Math.min(currentPage + 3, pagesCount); i++) {
        pages.push(i)
    }
    return <div>
        {pages.map(p => {
            return <span className={currentPage === p ? styles.selected : ""}
                onClick={(e) => { onPageChanged(p) }}>{p} </span>
        })}
    </div>
}
export default Paginator