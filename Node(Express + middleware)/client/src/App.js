import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import AddUser from "./components/addUser";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" element={<Redirect to="/home" />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/add-user" element={<AddUser />} />
        <Route exact path="/about" element={<About />} />
      </Switch>
    </Layout>
  );
};

export default App;
