import React, {useState, useEffect} from 'react'
import './signoutform.css'

export default function signoutform({ surname, mainButton }) {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  const [phone, setPhone] = useState("");
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "username": username, "password": password, "email": email, "phone": phone})
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username != "" && password != "" && email != "" && phone != "" )
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

  return (
    <>
    <form onSubmit={handleSubmit} method='POST'>
            <h3>SignUp Form</h3>
    
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="username" value={username} onChange={onUser} id="username" required/>
    
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" value={password} onChange={onPass} id="password" required/>
    
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" value={email} onChange={onEmail} id="email" required/>

            <label htmlFor="phone">Phone</label>
            <input type="text" placeholder="Phone" value={phone} onChange={onPhone} id="phone" required/>

            <button type="submit">Submitt</button>
            <div className="social">
              <div className="go">  Google</div>
              <div className="fb"> Facebook</div>
            </div>
            
        </form>
    </>
  )
}

