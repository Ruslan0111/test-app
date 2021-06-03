import { useRef } from 'react';
import { useHistory, Link } from "react-router-dom";

import './index.scss';

import firebase from 'firebase/app';

function Register({ onSignIn }) {
  const history = useHistory();

  const emailEl = useRef(null);
  const nameEl = useRef(null);
  const passwordEl = useRef(null);
  
  const errorEl = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    errorEl.current.innerText = '';
    signUp(emailEl.current.value, passwordEl.current.value);
  }

  function signUp(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        user.updateProfile({
          displayName: nameEl.current.value
        })
          .then(function() {
            sessionStorage.setItem('user', JSON.stringify(user));
            history.push('/');
          })
          .catch(function(error) {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
          errorEl.current.innerText = 'Password should be at least 6 characters';
        }
        console.log(errorCode);
        console.log(errorMessage);
    });
  }

  return (
    <div className="registration">
      <form onSubmit={handleSubmit} className="registration__form">
        <h1>Complete the form</h1>
        <input type="text" ref={nameEl} placeholder="Your name" required />
        <input type="email" ref={emailEl} placeholder="Email" required />
        <p ref={errorEl} className="registration__error"></p>
        <input type="password" ref={passwordEl} placeholder="Password" required />
        <button type="submit">Submit</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}

export default Register;