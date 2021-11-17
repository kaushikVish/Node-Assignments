import React, { useState, useEffect } from "react";
import "./home.css";

const Home = () => {
  const [users, setUsers] = useState([]);

  const removeUser = async (id) => {
    console.log(id);
    const response = await fetch(`http://127.0.0.1:8000/delete-user/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    setUsers(data);
  };

  useEffect(async () => {
    const response = await fetch(`http://127.0.0.1:8000/users`);
    const data = await response.json();
    console.log(data);
    setUsers(data);
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Remove User</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.userName}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.phoneNumber}</td>
              <td>
                <button onClick={() => removeUser(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
