
import Navbar from './Navbar';
import { useState } from 'react';
import Home from './Home'

import {Routes,Route, Navigate} from "react-router-dom";
import About from './About';
import Create from './Create';
import PostDetails from './PostDetails';
import PostEdit from './PostEdit';
import NotFoundPage from './NotFoundPage';
function App() {
  const arr = ['html', 'css', 'js', 'htmlhas']
  const [data, setDate] = useState(arr)



  return (
    
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/posts/:postId' element={<PostDetails/>}></Route>
          <Route path='/posts/edit/:postId' element={<PostEdit/>}></Route>
          <Route path='*' element={<NotFoundPage/>}></Route>
        </Routes>
      </div>
    
    </div>
  );
}

export default App;
