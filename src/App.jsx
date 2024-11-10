// import Home from "./components/Home.jsx"
// import Hello from "./components/Hello.jsx"
// import Counter from "./components/Counter.jsx"
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Post from "./components/Post"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Counter from "./components/Counter";
import Hello from "./components/Hello";

let App = () => {

  return (
    <div>



      <BrowserRouter>

        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/post' element={<Post />} />
          <Route path='/hello' element={<Hello />} />

        </Routes >

      </BrowserRouter>
    </div>
  )
}


export default App;