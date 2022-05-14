import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;