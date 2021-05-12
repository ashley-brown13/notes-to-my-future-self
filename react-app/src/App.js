import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import SplashPage from './components/SplashPage';
import TagPage from "./components/TagPage";
import SingleTagPage from "./components/SingleTagPage";
import CreateNotePage from "./components/CreateNotePage";
import EditNotePage from './components/EditNotePage';
import SingleNotePage from './components/SingleNotePage';
import TextNotesPage from './components/TextNotesPage';
import MusicNotesPage from './components/MusicNotesPage';
import VideoNotesPage from './components/VideoNotesPage';
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
        <ProtectedRoute path="/tags/:tagId" exact={true}>
          <SingleTagPage />
        </ProtectedRoute>
        <ProtectedRoute path="/notes/text" exact={true}>
          <TextNotesPage />
        </ProtectedRoute>
        <ProtectedRoute path="/notes/music" exact={true}>
          <MusicNotesPage />
        </ProtectedRoute>
        <ProtectedRoute path="/notes/video" exact={true}>
          <VideoNotesPage />
        </ProtectedRoute>
        <ProtectedRoute path="/notes/create" exact={true}>
          <CreateNotePage />
        </ProtectedRoute>
        <ProtectedRoute path="/notes/:noteId/edit" exact={true}>
          <EditNotePage />
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
