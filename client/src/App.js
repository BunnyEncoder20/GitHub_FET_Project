import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { LoginComp } from './components/Login/LoginComp'
import { Signup } from './components/Signup/Signup'
import { Listing } from './components/Listing/Listing'



function App() {
  return (
    <div className="App">
      {/* <h1>FET Project</h1> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listing />}></Route>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/login" element={<LoginComp />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
