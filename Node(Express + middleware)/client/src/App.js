import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import AddUser from "./components/addUser";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/add-user" element={<AddUser />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
};

export default App;
