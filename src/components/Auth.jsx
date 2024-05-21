/* eslint-disable no-unused-vars */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase.config";

const Auth = () => {
  const [uid, setUid] = useState(localStorage.getItem("uid"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    console.log(data);
    setUid(data.user.id);
    localStorage.setItem("uid", data.user.uid);
  };

  const handleRegister = async () => {
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      console.log(data.user.uid);
      localStorage.setItem("uid", data.user.uid);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {uid ? (
        <div>User has already logged in</div>
      ) : (
        <>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button onClick={handleLogin}>Handle Login</button>
            <button onClick={handleRegister}>Handle Register</button>
          </div>
        </>
      )}
    </>
  );
};

export default Auth;
