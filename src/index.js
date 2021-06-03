import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp({
    apiKey: "AIzaSyDz7_mE-_h5QhFh7N6FtiFYo8q6OXqJWME",
    authDomain: "test-project-e340a.firebaseapp.com",
    projectId: "test-project-e340a",
    storageBucket: "test-project-e340a.appspot.com",
    messagingSenderId: "256985874264",
    appId: "1:256985874264:web:4d6d06eb725478affb6f2d",
    measurementId: "G-SXRRG54485"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
