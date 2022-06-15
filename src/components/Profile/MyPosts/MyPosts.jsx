import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)

    let newPostElement = React.createRef()

    let addPost = ()=> {
        props.addPost()
    }

    let onPostChange = ()=> {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value = {props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts
