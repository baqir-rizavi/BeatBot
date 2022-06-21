import React, {useState, useEffect} from 'react'
import './Form.css'

export default function Form({ surname, mainButton }) {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "username": username, "password": password, "remember_me": 0})
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username != "" && password != "")
    { 
      fetch("/login", requestOptions).then(
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

  // useEffect(() => {
  //   if (username != "")
  //   {
      
  //   }
  // }, [])

  return (
    <>
    <form onSubmit={handleSubmit} method='POST'>
            <h3>{surname}</h3>
    
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="username" value={username} onChange={onUser} id="username" required/>
    
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" value={password} onChange={onPass} id="password" required/>
    
            <button type="submit">{mainButton}</button>
            <div className="social">
              <div className="go">  Google</div>
              <div className="fb"> Facebook</div>
            </div>
            
        </form>
    </>
  )
}
