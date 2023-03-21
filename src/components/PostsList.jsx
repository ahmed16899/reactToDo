import Post from './Post';
import Modal from './Modal';

import classes from './PostsList.module.css'

import NewPost from './NewPost';
import { useState } from 'react';

function PostsList(props) {

 const [posts , setPosts]=useState([]);
 function addPostHandler(postData)
 {
  //setPosts([postData , ...posts])
  
  setPosts((existingPosts)=>[postData , ...existingPosts] )
  console.log(posts)
 }
  let modalContent ;
  if(props.isPosting)
  {
    modalContent = <Modal onClose={props.onStopPosting}>
    <NewPost
      onCancel={props.onStopPosting}
      onAddPost={addPostHandler}
    />
  </Modal>
  }
  
 

  return (
    <>
      {modalContent}

      {posts.length>0 && 
        <ul className={classes.posts}>
        {posts.map((post)=>  <Post key={post.body} name={post.name} body={post.body}/>  )}
      </ul>}

      {posts.length===0 && 
        <div style={{textAlign:'center' , color:'white'}}>
              <h2>There is No posts ...</h2>
              <p>Add some .</p>
        </div>
        }
      

    </>

  );
}

export default PostsList;
