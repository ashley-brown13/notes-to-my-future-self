import React, { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import  { useDispatch } from "react-redux";
import LogoutButton from './auth/LogoutButton';
import { useSelector } from "react-redux";
import { login } from "../store/session";
import './NavBar.css'


const NavBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = async (e) => {
        e.preventDefault();
        setEmail("demo@aa.io")
        setPassword("password")
        const data = await dispatch(login(email, password));
        if(data){
            history.push(`/`)
        }
      };

    let content = null
    if(!user){
        content = (
            <div className="nav-login-signup">
                <div>
                    <NavLink to="/login" exact={true} activeClassName="active" className="link">
                    Login
                    </NavLink>
                </div>
                <div className="nav-signup">
                    <NavLink to="/sign-up" exact={true} activeClassName="active" className="link">
                    Sign Up
                    </NavLink>
                </div>
                <div>
                    <button className="demo-button" onClick={onLogin}>Demo</button>
                </div>
            </div>
        )
    } else {
        content = (
            <div className="user-buttons">
                <NavLink to="/notes/create" exact={true} activeClassName="active" className="user-link">
                    Create a Note
                </NavLink>
                <NavLink to="/tags" exact={true} activeClassName="active" className="user-link">
                    Tags
                </NavLink>
                <NavLink to="/notes/text" exact={true} activeClassName="active" className="user-link">
                    Text Notes
                </NavLink>
                <NavLink to="/notes/music" exact={true} activeClassName="active" className="user-link">
                    Music Notes
                </NavLink>
                <NavLink to="/notes/video" exact={true} activeClassName="active" className="user-link">
                    Video Notes
                </NavLink>
                <div>
                    <LogoutButton />
                </div>
            </div>
        )
    }


  return (
    <nav className="the-nav">
      <div className="nav-bar">
        <div>
          <NavLink to="/" exact={true} activeClassName="active" className="link">
            Notes To My Future Self
          </NavLink>
        </div>
        {content}
      </div>
    </nav>
  );
}

export default NavBar;
