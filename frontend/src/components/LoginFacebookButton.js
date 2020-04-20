import React from "react";
import firebase from "../firebase";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

const LoginFacebookButton = (props) => {
  let provider = new firebase.auth.FacebookAuthProvider();
  const dispatch = useDispatch();

  return (
    <Button
      className="font"
      onClick={() => {
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(async function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            console.log(result);
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log(result);
            if (result.additionalUserInfo.isNewUser) {
              //register
              const res = await axios.post(
                "http://localhost:5000/student/register",
                {
                  email: user.email,
                }
              );
              //ระบบ login อื่น นอกจาก facebook
              //
              if (res.data) {
                localStorage.setItem("token", res.data);
                dispatch({ type: "LOGIN_SUCCESS" });
                props.history.push("/");
              }
            } else {
              const res2 = await axios.post(
                "http://localhost:5000/student/login",
                {
                  email: user.email,
                }
              );
              console.log(res2.data);
              if (res2.data) {
                localStorage.setItem("token", res2.data);
                dispatch({ type: "LOGIN_SUCCESS" });
                props.history.push("/");
              }
            }

            console.log("token ", token);
            console.log("user email", user.email);
          })
          .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      }}
    >
      Login with Facebook
    </Button>
  );
};

export default withRouter(LoginFacebookButton);
