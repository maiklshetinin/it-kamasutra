import React from 'react';


import Post from './Post/Post';
import './Profile.css';


const Profile = (props) => {

    let postsElements = props.profilePage.posts.map(obj => (<Post message={obj.message} avatar={obj.avatar} />))
    
   let newPostElement=React.useRef()

let onChange=()=>{
props.onPostChange(newPostElement.current.value)
}
   
    return (
        <main className="main">
            <div className="screen-image">
                <img className="screen-image__poster" src="http://jblewitt.com/blog/wp-content/uploads/2008/06/vinales_panorama11.jpg" alt="" />
            </div>
            <form className='form' >
                <textarea
                    ref={newPostElement}
                    onChange={onChange} 
                    value={props.profilePage.newPostText}
                 >
                </textarea>
                <button onClick={props.addPost} className='button__post'>Add post</button>
            </form>
            <div className="content">
                {postsElements}
            </div>
        </main>
    )
}
export default Profile;