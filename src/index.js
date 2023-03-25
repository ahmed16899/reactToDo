import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import NewPost from './components/NewPost';
import RootLayout from './routes/RootLayout';
const router = createBrowserRouter([
  {path:'/' , element:<RootLayout/> , children:[
    {path:'/' , element:<App/>},
    {path:'create-post' , element:<NewPost />},
    {path:''},
  ]},

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
reportWebVitals();
