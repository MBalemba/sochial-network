import React from 'react';
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {toggleIsFollowingProgress} from "../../redux/user-reducer";

let Users = (props) => {
    debugger
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {

        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map((el) => {
                    debugger
                    return <span onClick={(e) => {
                        e.preventDefault();
                        props.onPageChanges(el)
                    }} className={props.currentPage === el ? styles.selectedPage : ''}>{el + ' '}</span>
                })}
            </div>

            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <NavLink to={'/profile/' + u.id}> <img
                        src={u.photos.small ? u.photos.small : 'https://www.minecraftprem.com/assets/img/ahmethakan.jpg'}
                        alt=""/></NavLink>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id == u.id)} onClick={() => {
                                debugger
                                props.toggleIsFollowingProgress(true, u.id);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': "973bb087-4f51-40db-9a8c-410a2141146c"
                                    }
                                }).then((response) => {
                                    debugger

                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toggleIsFollowingProgress(false, u.id);
                                })
                                    .catch((response) => {

                                        console.dir(response);
                                    });
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id == u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': "973bb087-4f51-40db-9a8c-410a2141146c"
                                    }
                                }).then((response) => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id);
                                    }
                                    props.toggleIsFollowingProgress(false, u.id);

                                });

                            }}>Follow</button>
                        };

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