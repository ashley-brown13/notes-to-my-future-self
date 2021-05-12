import React, { useState } from "react";
import  { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import './LoginForm.css'

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-page">
    <form onSubmit={onLogin} className="login-form">
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div className="login-label-input">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          className="login-input"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className="login-label-input">
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          className="login-input"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
      </div>
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default LoginForm;
