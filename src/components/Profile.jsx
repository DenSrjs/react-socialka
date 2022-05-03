import React from 'react';
import s from'../style/Profile.module.css'

const Profile = ()=>{
    return(
        <div className={s.content}>
            <div>
                <img src="" alt="фон"/>
            </div>
            <div>ava + description</div>
            <div>My posts</div>
            <div>New post</div>
            <div>
                <div>post1</div>
                <div>post2</div>
            </div>
        </div>
    )
}

export default Profile
