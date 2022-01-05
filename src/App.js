import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { AmplifySignOut } from '@aws-amplify/ui-react-v1'


function App() {
  return (

    <div className="App">
      <Form />
      <AmplifySignOut/>
    </div>

  );
}

export default withAuthenticator(App);