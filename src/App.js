import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Headerout from "./Components/headerout";
import Application from "./Components/Application";
import UserProvider from "./providers/UserProvider";
import ProfilePage from "./Components/ProfilePage";
import { UserContext } from "./providers/UserProvider";
function App() {

  
  
  return (
    <UserProvider>
      <Headerout/>
      <Application />
    </UserProvider>
  );
}

export default App;
