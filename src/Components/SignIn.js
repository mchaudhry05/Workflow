import React, {useState} from "react";
import { Link } from "@reach/router";
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";


const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
      };
      
      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;
        
          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };
   

  return (
    <div  className="container">
    <div className="login-block">
      <div>
      <h1 className="signin-header">Sign In</h1>
      </div>
      <div className="sign-block">
        {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
        <form className="loggin-form">
          <label htmlFor="userEmail" className="block">
           
          </label>
          <input
            type="email"
            className="input"
            name="userEmail"
            value = {email}
            placeholder="Enter your email"
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="block">
            
          </label>
          <input
            type="password"
            className="input"
            name="userPassword"
            value = {password}
            placeholder="Enter your Password"
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
          />
          <button className="loggin-button" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </button>
        </form>
        <p className="text-center">or</p>
        <button
          className="loggin-button"
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Sign in with Google
        </button>
        <p className="text-center my-3">
          Don't have an account?{" "}
          <Link to="signUp" className="text-center">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to="passwordReset" className="text-center">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default SignIn;
