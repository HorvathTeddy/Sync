import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!firstName) alert("Please enter name");
    registerWithEmailAndPassword(firstName + lastName, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <nav><Link to='/' className="sync">Sync</Link>
    <div className="register">
      Create a Sync account
      <div className="register__container">
        First Name
        <input
          type="text"
          className="register__textBox"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder=""
        />
        Last Name
        <input
          type="text"
          className="register__textBox"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder=""
        />
        Email
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=""
        />
        Password
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=""
        />
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <span className="or">- - - or - - -</span>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div>
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
      </div>
    </div>
    </nav>
  );
}
export default Register;