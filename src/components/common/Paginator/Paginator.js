import React, { useState } from 'react';
import styles from './Paginator.module.css'


let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
       pages.push(i)
    }
    // for (let i = Math.max(currentPage - 3, 0); i <= Math.min(currentPage + 3, pagesCount); i++) {
    //     pages.push(i)
    // }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, SetPortionNumber] = useState(1)
    let LeftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let RightPortionPageNumber = LeftPortionPageNumber + portionSize
    return <div className={styles.paginator}>
        {portionNumber > 1 &&
            <button onClick={() => { SetPortionNumber(portionNumber - 1) }}>Before</button>}
        {pages
            .filter(p => p >= LeftPortionPageNumber && p <= RightPortionPageNumber)
            .map(p => {
                return <span className={currentPage === p ? styles.selected : ""}
                    onClick={(e) => { onPageChanged(p) }}>{p} </span>
            })}
        {portionCount > portionNumber &&
            <button onClick={() => { SetPortionNumber(portionNumber + 1) }}>Next </button>
        }  </div>
}
export default Paginator