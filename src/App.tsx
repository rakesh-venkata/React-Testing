import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes, Route } from 'react-router-dom';
import  GetPost  from './components/getPosts/getPost.tsx';
import  AddPost  from './components/addPost/addPost.tsx';
import DeleteEmployee  from './components/deletePost/deletePost.tsx';
import {store} from './store';

function App() {
  return (
          <Routes>
                <Route path='/' element={ < GetPost /> } />
                <Route path="/add"  element={ < AddPost /> } />
                <Route path="delete" element={ < DeleteEmployee /> } />
          </Routes>
        
    
    
  );
}

export default App;
