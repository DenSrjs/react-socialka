import React from "react";
import {Axios as axios} from "axios";

class Users extends React.Component {
    componentDidMount() {
        /* axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(responce => {
                this.props.setUsers(responce.data.items)
            });*/
    }

    render() {
        return <div>
            <div>Users</div>
            {
                this.props.users.map(u => <div>
                <span>
                    <div><img alt="avatar"/></div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}


export default Users;
