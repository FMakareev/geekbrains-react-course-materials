import React, {useState} from 'react';
import {Link} from "react-router-dom";
import firebase from 'firebase';

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);

    } catch (e) {
      setError(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Fill in the form below to register new account.</p>
        <div>
          <input
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            name="password"
            onChange={handlePassChange}
            value={password}
            type="password"
          />
        </div>
        <div>
          {error && <p>{error}</p>}
          <button type="submit">Login</button>
        </div>
        <hr/>
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
}