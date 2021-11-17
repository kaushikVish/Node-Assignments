import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./addUser.css";

const AddUser = () => {
  let userNameref = useRef();
  let firstNameRef = useRef();
  let lastNameRef = useRef();
  let phoneNumberRef = useRef();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUser = {
      userName: userNameref.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
    };
    const response = await fetch(`http://127.0.0.1:8000/add-user`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    });
    const data = response.json();
    userNameref.current.value='';
    firstNameRef.current.value='';
    lastNameRef.current.value='';
    phoneNumberRef.current.value='';
    alert("User Added")
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Add User</h1>
        <label>Username</label>
        <input type="text" ref={userNameref} />
        <label>First Name</label>
        <input type="text" ref={firstNameRef} />
        <label>Last Name</label>
        <input type="text" ref={lastNameRef} />
        <label>Phone Number</label>
        <input type="number" ref={phoneNumberRef} />
        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default AddUser;
