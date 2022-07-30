import React, {useState, useEffect} from 'react';
// import { useHistory } from 'react-router-dom';
import './Form.css';
import { useNavigate } from 'react-router-dom';

export default function Form({ surname, mainButton, valid }) {
  const navigate = useNavigate();
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
      try{
        fetch("/login", requestOptions).then(
          result => result.json()
        ).then(
            data => {
              if(data.status == "logged_in"){
                navigate('/homepage');
              }
            }
        )
      }
      catch(err){
        console.log(err);
      }
    }
  };

  const onUser = (e) => {
    setUsername(e.target.value);
  };

  const onPass = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
    <form onSubmit={handleSubmit} method='POST' id='loginfrom'>
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
