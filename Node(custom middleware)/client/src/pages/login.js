import React,{useRef,useEffect} from "react";
import {useNavigate } from "react-router-dom"
import './login.css'
import axios from 'axios';

const Login = () => {
    const navigate=useNavigate();

    var nameRef=useRef();
    var passwordRef=useRef();

    useEffect(async()=>{
        const response = await fetch(`http://127.0.0.1:8000/authentication`);
        const data=response.json();
        if(data.isLogin){
            navigate('/dashboard')
        }
    },[])

    const handleLogin = async (e) =>{
        e.preventDefault();
        const data={
            userName:nameRef.current.value,
            password:passwordRef.current.value
        }
        // const response=axios.get(`http://127.0.0.1:8000/login`)
        const response = await fetch(`http://127.0.0.1:8000/login`)
        if(response.status===200){
            navigate('/dashboard')
        }else{
            console.log("soorrry",response)
        }
    }

  return (
    <>
    <div>
      <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <label>UserName</label>
          <input type="text" ref={nameRef} placeholder="Enter your name"/>
          <label>Password</label>
          <input type="password" ref={passwordRef} placeholder="Enter your password"/>
          <button>Login</button>
      </form>
      </div>
    </>
  );
};

export default Login;
