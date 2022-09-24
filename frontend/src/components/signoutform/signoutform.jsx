import { SettingsSystemDaydreamTwoTone } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, {useState, useEffect} from 'react'
import './signoutform.css'

export default function signoutform({ surname, mainButton }) {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "name": name, "username": username, "password": password, "email": email})
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username != "" && password != "" && email != "" && name != "")
    { 
      fetch("/signup", requestOptions).then(
        result => result.json()
      ).then(
          data => {
            console.log(data);
          }
      )
    }
  };

  const onUser = (e) => {
    setUsername(e.target.value);
  };

  const onPass = (e) => {
    setPassword(e.target.value);
  };

  const onEmail = (e) => {
    setEmail(e.target.value);
  };

  const onPhone = (e) => {
    setPhone(e.target.value);
  };

  const onName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
    <form onSubmit={handleSubmit} method='POST'>
            <h3>SignUp Form</h3>
    
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="username" value={username} onChange={onUser} id="username" required/>
    
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" value={password} onChange={onPass} id="password" required/>
    
            <label htmlFor="name">Name</label>
            <input type="name" placeholder="Name" value={name} onChange={onName} id="name" required/>

            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" value={email} onChange={onEmail} id="email" required/>

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

