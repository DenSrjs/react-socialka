import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = ()=>{
    let postData = [
        {id: 1, message: "hello", likeCounts: 45 },
        {id: 2, message: "hi",  likeCounts: 12},
    ]

    let postsElement = postData.map(p => <Post message ={p.message} likeCounts ={p.likeCounts}/>)

    return(
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts
