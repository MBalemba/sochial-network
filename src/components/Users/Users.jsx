import React from 'react';
import styles from "./users.module.css";

let Users = (props) => {
    debugger
    let pagesCount = Math.ceil(props.totalUsersCount/ props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++ ){

        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map((el) => {
                    debugger
                    return <span onClick= {(e) => {e.preventDefault() ;props.onPageChanges(el)}} className={props.currentPage === el ? styles.selectedPage: ''}>{el + ' '}</span>
                })}
            </div>

            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div><img
                        src={u.photos.small ? u.photos.small : 'https://www.minecraftprem.com/assets/img/ahmethakan.jpg'}
                        alt=""/></div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        {/*<div>{u.location.country}</div>*/}
                        {/*<div>{u.location.city}</div>*/}
                    </span>
                </span>

                </div>)
            }
        </div>
    )
}


export default Users;