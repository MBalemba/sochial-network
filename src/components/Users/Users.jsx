import React from 'react';
import * as axios from "axios";
import userPhoto from "../../assets/image/user.jpg"
import styles from "./users.module.css"
class Users extends React.Component{




    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                debugger;
                console.log(response)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
        }
    }

    onPageChanges = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            debugger;
            console.log(response)
            this.props.setUsers(response.data.items);
            debugger
        })
    }



    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount/ this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++ ){
            debugger
            pages.push(i);
        }
        return (


            <div>
                <div>
                    {pages.map((el) => {
                        return <span onClick={() => {this.onPageChanges(el)}} className={ this.props.currentPage === el && styles.selectedPage}>{el+' '}</span>
                    })}
                </div>

                <button onClick={this.getUsers}>Get Users</button>
                {
                    this.props.users.map(u => <div key={u.id}>
                <span>
                    <div><img
                        src={u.photos.small ? u.photos.small : 'https://www.minecraftprem.com/assets/img/ahmethakan.jpg'}
                        alt=""/></div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follows(u.id)
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
}

export default Users;