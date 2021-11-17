import React, { useState, useEffect } from "react";

const About = () => {
  const [about, setAbout] = useState({description:"xyz",creator:"Vishal Kaushik"});

  useEffect(async () => {
    const response = await fetch(`http://127.0.0.1:8000/about`);
    const data = await response.json();
    setAbout(data[0]);
  }, []);
  return (
    <>
      <h1 style={{textAlign:"center", color:"#9b0521"}}>About us</h1>
      <div>
        <h2>Description:</h2>
        <p>{about.description}</p>
      </div>
      <div>
        <h3 style={{color:"#c54848"}}>Created by {about.creator}</h3>
      </div>
    </>
  );
};

export default About;
