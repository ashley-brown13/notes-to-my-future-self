import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import SplashPage from './components/SplashPage';
import TagPage from "./components/TagPage";
import CreateNotePage from "./components/CreateNotePage";
import SingleNotePage from './components/SingleNotePage';
import TextNotesPage from './components/TextNotesPage'
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
// import { authenticate } from "./services/auth";
import { authenticate } from "./store/session";

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate())
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/tags" exact={true}>
          <TagPage />
        </ProtectedRoute>
        <ProtectedRoute path="/notes/text" exact={true}>
          <TextNotesPage />
        </ProtectedRoute>
        <ProtectedRoute path="/notes/create" exact={true}>
          <CreateNotePage />
        </ProtectedRoute>
        <ProtectedRoute path="/notes/:noteId" exact={true}>
          <SingleNotePage />
        </ProtectedRoute>
        <Route path="/" exact={true}>
          <SplashPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
