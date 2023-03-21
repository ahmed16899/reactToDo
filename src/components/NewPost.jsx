import classes from './NewPost.module.css'
import { useState } from 'react';

function NewPost(props) {

  const [body, setEnteredBody] = useState('')
  function bodyChangedHandler(e) {
    setEnteredBody(e.target.value)
  }

  const [name, setEnteredName] = useState('')
  function nameChangedHandler(e) {
    setEnteredName(e.target.value)
  }


  function submitHandler(e) {
    e.preventDefault();
    console.log({body,
      name})
      props.onAddPost({body,name});
      props.onCancel();
  }
  return (
    // <form >

    //     <input type="text" placeholder="body" onChange={props.onBodyChange}/>
    //     <br />
    //     <input type="text" placeholder="name" onChange={props.onNameChange}/>
        
    // </form>


    <form className={classes.form}  onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangedHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required  onChange={nameChangedHandler}/>
      </p>
      <p className={classes.actions}>
          <button type='button' onClick={props.onCancel}>Cancel</button>
          <button>Submit</button>
      </p>
    </form>

  );
}

export default NewPost;
