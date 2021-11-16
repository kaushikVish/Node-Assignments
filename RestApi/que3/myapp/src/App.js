import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState("");

  const handleClick = (e) => {
    fetch(`http://127.0.0.1:8000/${e}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <h3 style={{ margin: "20px" }}>
          <button onClick={() => handleClick("home")}>Home</button>
        </h3>
        <h3 style={{ margin: "20px" }}>
          <button onClick={() => handleClick("about")}>About</button>
        </h3>
        <h3 style={{ margin: "20px" }}>
          <button onClick={() => handleClick("contact")}>Contact us</button>
        </h3>
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}> {data}</h1>
      </div>
    </>
  );
};

export default App;
