import React, {useState} from 'react'
import './First.css'
import Slider from '../Slider/Slider'
import Button from '../Buttons/Buttons'
import Form from '../form/Form'
import SignUpform from '../signoutform/signoutform'

export default function First() {

    const [loginClicked, setLoginClicked] = useState(false);
    const [signupClicked, setSignupClicked] = useState(false);

    const loginhandleClick = () => {
        setLoginClicked(!loginClicked);
    }

    const signuphandleClick = () => {
        setSignupClicked(!signupClicked);
    }

    const handler = () => {
        if(loginClicked){
            setLoginClicked(!loginClicked);
        }
        if(signupClicked){
            setSignupClicked(!signupClicked);
        }
    }

    return (
    <>
        <div>
            <div className="container">

                <Slider className="slider"/>
                
                <div className="cover" onClick={handler}>
                    <div className="cover-content-box" >
                        <h1 className="logo">BeatBot</h1>
                        <div className="btn-container">
                            <div className="loginButton" onClick={loginhandleClick}>
                                <Button className="login-button" name='Log In' color="#1F3473" hover="#3B74BF" />
                            </div>
                            <div className="signupButton" onClick={signuphandleClick}>
                                <Button className="signup-button" name='Sign Up' color="#611F73" hover="#9941BF" />
                            </div>    
                        </div>
                    </div>
                </div>

                {loginClicked && <Form className="form" surname="Login Form" mainButton="Log In" passwordValue="loginPassword" usernameValue="loginUsername" />}
                {signupClicked && <SignUpform />}

            </div>
        </div>
    </>
  )
}
