import { useRef } from 'react';
import { useHistory, Link } from "react-router-dom";

import './index.scss';

import firebase from 'firebase/app';

function Login({ onSignIn }) {
  const history = useHistory();

  const emailEl = useRef(null);
  const passwordEl = useRef(null);

  const errorEl1 = useRef(null);
  const errorEl2 = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    errorEl1.current.innerText = '';
    errorEl2.current.innerText = '';
    login(emailEl.current.value, passwordEl.current.value);
  }

  function login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        sessionStorage.setItem('user', JSON.stringify(user));
        history.push('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/user-not-found') {
          errorEl1.current.innerText = 'No such user';
        } else if (errorCode === 'auth/wrong-password') {
          errorEl2.current.innerText = 'Wrong passord';
        }
        
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login__form">
        <h1>Complete the form</h1>
        <p ref={errorEl1} className="login__error"></p>
        <input type="email" ref={emailEl} placeholder="Email" />
        <p ref={errorEl2} className="login__error"></p>
        <input type="password" ref={passwordEl} placeholder="Password" />
        <button type="submit">Login</button>
        <p>Don't have an account yet? <Link to="/register">Register now</Link></p>
      </form>
    </div>
  );
}

export default Login;