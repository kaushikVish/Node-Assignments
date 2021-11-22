import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route exact path="/login">
        <Login/>
      </Route> */}
        <Route exact path="/" element={<Navigate to="/login" />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        {/* <Route exact path="/dashboard">
        <Dashboard/>
      </Route> */}
      </Routes>
    </>
  );
};

export default App;
