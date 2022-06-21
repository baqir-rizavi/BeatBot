import React, {useState, useEffect} from 'react'
import './Form.css'

export default function Form({ surname, mainButton }) {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "username": username, "password": password, "remember_me": 1})
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(e.target.elements.username.value);
    setPassword(e.target.elements.password.value);
    console.log(username);
    fetch("/login", requestOptions).then(
      result => result.json()
    ).then(
      data => {
        console.log(data)
      }
    )
  };

  // useEffect(() => {
  //   if (username != "")
  //   {
      
  //   }
  // }, [])

  return (
    <>
    <form onSubmit={handleSubmit} method='POST'>
            <h3>{surname}</h3>
    
            <label for="username">Username</label>
            <input type="text" placeholder="Email or Phone" id="username"/>
    
            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password"/>
    
            <button type="submit">{mainButton}</button>
            <div className="social">
              <div className="go">  Google</div>
              <div className="fb"> Facebook</div>
            </div>
            
        </form>
    </>
  )
}
