import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  var inputRef = useRef();

  const searchUser = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${inputRef.current.value}`
      );
      if (response.status === 200) {
        const data = await response.json();
        setUser(data);
        console.log(data);
      } else {
        setUser("");
      }
    } catch (error) {
      setUser(error);
    }
  };

  const logout = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://127.0.0.1:8000/logout`);
    if (response.status === 200) {
      navigate("/login");
    } else {
      console.log("soorrry", response);
    }
  };

  return (
    <div>
      <div className="dashboard">
        <h1>DashBoard</h1>
        <button onClick={logout}>Logout</button>
      </div>
      <div className="content_div">
        <span>Search GitHub Profile</span>
        <div>
          <input type="text" placeholder="Enter UserName" ref={inputRef} />
          <button onClick={searchUser}>Search</button>
        </div>
      </div>
      {user !== "" ? (
        <div className="user_details">
          <div className="img_div">
            <img src={user.avatar_url} alt="img" />
            <span>{user.name ? user.name : user.login}</span>
          </div>
          <div className="details_div">
            <span>Followers: {user.followers}</span>
            <span>Following: {user.following}</span>
            <span>Repositories: {user.repos_url.length}</span>
            <a href={user.html_url} target="_blank">
              Visit GitHub Profile
            </a>
          </div>
        </div>
      ) : (
        <span>No data</span>
      )}
    </div>
  );
};

export default Dashboard;
