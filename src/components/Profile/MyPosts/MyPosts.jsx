import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = ()=>{
    let postData = [
        {id: 1, message: "hello", likeCounts: 45 },
        {id: 2, message: "hi",  likeCounts: 12},
    ]
    return(
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message ={postData[0].message} likeCounts ={postData[0].likeCounts}/>
                <Post message ={postData[1].message} likeCounts = {postData[1].likeCounts}/>
            </div>
        </div>
    )
}

export default MyPosts
