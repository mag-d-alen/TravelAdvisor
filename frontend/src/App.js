/** @format */

import React, { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthContext from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';

function App() {
  const [savedCountriesArray, setSavedCountriesArray] = useState([]);
  return (
    <AuthContext.Provider
      value={{ setSavedCountriesArray, savedCountriesArray }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
