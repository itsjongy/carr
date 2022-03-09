import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import LandingPage from "./components/LandingPage"
import * as sessionActions from "./store/session";
import Images from "./components/Images/Images";
import Image from "./components/Image/Image"
import CreateImage from "./components/CreateImagePage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/images">
            <Images />
          </Route>
          <Route path="/images/new">
            <CreateImage />
          </Route>
          <Route path="/images/:id">
            <Image />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
