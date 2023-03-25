import Post from './Post';
import Modal from './Modal';

import classes from './PostsList.module.css'

import NewPost from './NewPost';
import { useState , useEffect } from 'react';

function PostsList(props) {
 /*fetch('http://localhost:8080/posts').then((data)=>data.json()).then((data)=> {
  console.log(data)
  setPosts(data.posts)
})*/
 const [posts , setPosts]=useState([]);
 const [isFetching , setisFetching]=useState(true);

 function addPostHandler(postData)
 {
  //setPosts([postData , ...posts])
  fetch('http://localhost:8080/posts' , {
    method:'POST',
    body:JSON.stringify(postData),
    headers:{
      'Content-Type':'application/json'
    }
  })
  setPosts((existingPosts)=>[postData , ...existingPosts] )
  console.log(posts)
 }

 useEffect(()=>{
  async function fetchPosts()
  {
    const res = await  fetch('http://localhost:8080/posts');
    const data = await res.json();
    setPosts(data.posts)
    setisFetching(false)
  }
  fetchPosts()
 },[])
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
    {isFetching &&  <div style={{textAlign:'center' , color:'white'}}> <p>loading posts...</p></div>}
      {modalContent}

      {!isFetching && posts.length>0 && 
        <ul className={classes.posts}>
        {posts.map((post)=>  <Post key={post.body} name={post.name} body={post.body}/>  )}
      </ul>}

      {!isFetching && posts.length===0 && 
        <div style={{textAlign:'center' , color:'white'}}>
              <h2>There is No posts ...</h2>
              <p>Add some .</p>
        </div>
        }
       

    </>

  );
}

export default PostsList;
