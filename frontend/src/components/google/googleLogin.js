import React from 'react';
import GoogleLogin from 'react-google-login';
import googleConfig from './googleConfig.json';
import { gapi } from 'gapi-script';


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
      <div>
            <GoogleLogin
                clientId={googleConfig.web.client_id}
                buttonText="login with google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                disabled = {false}
            />
      </div>
    );
}

export default GoogleButton;
