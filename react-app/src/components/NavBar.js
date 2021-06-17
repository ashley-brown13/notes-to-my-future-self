import React, { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import  { useDispatch } from "react-redux";
import LogoutButton from './auth/LogoutButton';
import { useSelector } from "react-redux";
import { login } from "../store/session";
import addNote from "../images/add.png";
import tagsIcon from "../images/hashtag.png";
import notesIcon from "../images/post-it.png";
import spotifyIcon from "../images/spotify64.png";
import videoIcon from "../images/youtube64.png";
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
            history.push(`/notes/text`)
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
                    <img src={addNote} alt="add note icon" />
                </NavLink>
                <NavLink to="/tags" exact={true} activeClassName="active" className="user-link">
                    <img src={tagsIcon} alt="tag icon" />
                </NavLink>
                <NavLink to="/notes/text" exact={true} activeClassName="active" className="user-link">
                    <img src={notesIcon} alt="notes icon" />
                </NavLink>
                <NavLink to="/notes/video" exact={true} activeClassName="active" className="user-link">
                    <img src={videoIcon} alt="video icon" />
                </NavLink>
                <NavLink to="/notes/music" exact={true} activeClassName="active" className="user-link">
                    <img src={spotifyIcon} alt="spotify icon" />
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
