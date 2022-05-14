import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login"
import AdminDashboard from "./components/admin-page/Dashboard";
import Peternak from "./components/admin-page/Peternak";
import ProdukJadi from "./components/admin-page/ProdukJadi";
import ProdukMentah from "./components/admin-page/ProdukMentah";
import Stup from "./components/admin-page/Stup";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login/>}/>

        // Admin Interface
        <Route path="/admin/dashboard" exact element={<AdminDashboard/>}/>
        <Route path="/admin/peternak" exact element={<Peternak/>}/>
        <Route path="/admin/produk-jadi" exact element={<ProdukJadi/>}/>
        <Route path="/admin/produk-mentah" exact element={<ProdukMentah/>}/>
        <Route path="/admin/stup" exact element={<Stup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;