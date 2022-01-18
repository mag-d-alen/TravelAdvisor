/** @format */

import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Profile from "./components/Profile";

function App() {
  const [savedCountriesArray, setSavedCountriesArray] = useState([]);
  return (
    <AuthContext.Provider
      value={{
        setSavedCountriesArray: setSavedCountriesArray,
        savedCountriesArray: savedCountriesArray,
      }}
    >
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route exact path="/" element={<Home />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route exact path="/profile" element={<Profile />} />
          </Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
