import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(username, email, password));
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="total-signup-page">
    <div className="signup-page">
        <form onSubmit={onSignUp} className="signup-form">
        <div>
            <label className="signup-label">Username</label>
            <input
            type="text"
            name="username"
            className="signup-input"
            onChange={updateUsername}
            value={username}
            ></input>
        </div>
        <div>
            <label className="signup-label">Email</label>
            <input
            type="text"
            name="email"
            className="signup-input"
            onChange={updateEmail}
            value={email}
            ></input>
        </div>
        <div>
            <label className="signup-label">Password</label>
            <input
            type="password"
            name="password"
            className="signup-input"
            onChange={updatePassword}
            value={password}
            ></input>
        </div>
        <div>
            <label className="signup-label">Confirm Password</label>
            <input
            type="password"
            name="repeat_password"
            className="signup-input"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            ></input>
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
        </form>
    </div>
    </div>
  );
};

export default SignUpForm;
