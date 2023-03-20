import Post from './Post';
import Modal from './Modal';

import classes from './PostsList.module.css'

import NewPost from './NewPost';
import { useState } from 'react';

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true)
  function hideModalHandler(e) {
    setModalIsVisible(false)
  }

  const [body, setEnteredBody] = useState('')
  function bodyChangedHandler(e) {
    setEnteredBody(e.target.value)
  }

  const [name, setEnteredName] = useState('')
  function nameChangedHandler(e) {
    setEnteredName(e.target.value)
  }
  let modalContent ;
  if(modalIsVisible)
  {
    modalContent = <Modal onClose={hideModalHandler}>
    <NewPost
      onBodyChange={bodyChangedHandler}
      onNameChange={nameChangedHandler}
    />
  </Modal>
  }
  
 

  return (
    <>
      {modalContent}


      <ul className={classes.posts}>
        <Post name={name} body={body} />
        <Post name={name} body={body} />
        <Post name={name} body={body} />
        <Post name={name} body={body} />
      </ul>

    </>

  );
}

export default PostsList;
