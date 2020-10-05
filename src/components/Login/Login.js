import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        storeAuthToken();
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleGoogleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        sessionStorage.removeItem("token");
        setLoggedInUser({});
        history.push("/");
      })
      .catch(function (error) {
        console.log("SignOut unsuccessful");
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        console.log("Could Not store token to session storage");
      });
  };

  const redirectToHome = () => {
    history.push("/");
  };

  return (
    <div>
      <div
        className="container d-flex flex-column justify-content-start align-items-center text-warning text-center"
        style={{ height: "100vh", backgroundColor: "#f5f5f5" }}
      >
        <img
          src="https://i.ibb.co/ckQkMZ2/Group-1329.png"
          alt="logo"
          style={{ width: 250, marginTop: 75 }}
        />
        <div
          className="col-md-6 m-5 d-flex flex-column align-items-center justify-content-center"
          style={{ borderRadius: 12, backgroundColor: "white" }}
        >
          <h4 className="my-3">Continue your Journey</h4>
          {loggedInUser.email ? (
            <div
              style={{
                width: "75%",
                borderRadius: 15,
                border: "1px solid lightgray",
                cursor: "pointer",
                marginTop: 15,
              }}
              onClick={handleGoogleSignOut}
            >
              <img
                src="https://i.ibb.co/nfFSB2Z/google.png"
                alt="google-icon"
                style={{ width: 25, margin: "7px 15px" }}
              ></img>
              <span>SignOut With Google</span>
            </div>
          ) : (
            <div
              style={{
                width: "75%",
                borderRadius: 15,
                border: "1px solid lightgray",
                cursor: "pointer",
                marginTop: 15,
              }}
              onClick={handleGoogleSignIn}
            >
              <img
                src="https://i.ibb.co/nfFSB2Z/google.png"
                alt="google-icon"
                style={{ width: 25, margin: "7px 15px" }}
              ></img>
              <span>SignIn With Google</span>
            </div>
          )}
          <button className="btn btn-primary my-4" onClick={redirectToHome}>
            Back To Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
