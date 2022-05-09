import React from 'react';
import s from './Post.module.css'

const Post = (props)=>{
    return(
        <div>
            <img src="" alt="аватар"/>
            <p>
                {props.message}
            </p>
            <div>
                <span> like </span> {props.likeCounts}
            </div>
        </div>
    )
}

export default Post
