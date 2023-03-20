import './App.css';
import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';
import { useState } from 'react';




function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true)
  function hideModalHandler(e) {
    setModalIsVisible(false)
  }
  function showModalHandler(e) {
    setModalIsVisible(true)
  }

  return (
    <>
    <MainHeader onCreatePost={showModalHandler}/>
    <main>
    <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
    </main>
    </>

    // <div>
    // <PostsList />
    // <Post name="ahmed" /><Post />
    // <Post />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // </div>
  );
}

export default App;
