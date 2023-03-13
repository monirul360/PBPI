import React from "react";
import auth from "./../../firebas";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import google from "./../../Image/icon/google.png";
const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    console.log(user);
  }
  return (
    <>
      <div className="login-from">
        <div>
          <button onClick={() => signInWithGoogle()}>
            <img src={google} alt="" />
            Sign in with Google
          </button>
          <p className="text-danger pt-4 fw-bold">{error?.message}</p>
          {loading && (
            <div class="lds-spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
