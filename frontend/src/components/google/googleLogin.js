import React from 'react';
import GoogleLogin from 'react-google-login';
import googleConfig from './googleConfig.json';
import { gapi } from 'gapi-script';
import { Padding } from '@mui/icons-material';
import './googleLogin.css';

function GoogleButton() {

    gapi.load('client:auth2', () => {
        window.gapi.client.init({
            clientId: googleConfig.web.client_id
        })
    })

    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
             <GoogleLogin 
                 clientId={googleConfig.web.client_id}
    //             render={renderProps => (
    //                 <button onClick={renderProps.onClick} type="button">
    //                     hello
    //                 </button>

    //             )}
                buttonText={"login with google"}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
    );
}

export default GoogleButton;
