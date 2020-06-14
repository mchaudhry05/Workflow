import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { navigate } from "@reach/router";
import {auth} from "../firebase";
import Todo from "./todo";
import Header from "./header"
const ProfilePage = () => {
  const user = useContext(UserContext);
  const {photoURL, displayName, email, todos} = user;
  console.log(user);
 



  return (
  
    <div>
      <Header/>
      <Todo item={todos} user={user}/>
      
    </div>
  ) 
};

export default ProfilePage;

