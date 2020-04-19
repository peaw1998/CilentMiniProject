import React from "react"
import firebase from "../firebase"

const LoginFacebookButton = () => {
      let provider = new firebase.auth.FacebookAuthProvider()

      return (
            <button
                  onClick={() => {
                        firebase
                              .auth()
                              .signInWithPopup(provider)
                              .then(function (result) {
                                    // This gives you a Facebook Access Token. You can use it to access the Facebook API.

                                    var token = result.credential.accessToken
                                    // The signed-in user info.
                                    var user = result.user
                                    // ...
                                    if (result.isNewUser) {
                                          //register
                                    } else {
                                    }

                                    console.log("token ", token)
                                    console.log("user email", user.email)
                              })
                              .catch(function (error) {
                                    // Handle Errors here.
                                    var errorCode = error.code
                                    var errorMessage = error.message
                                    // The email of the user's account used.
                                    var email = error.email
                                    // The firebase.auth.AuthCredential type that was used.
                                    var credential = error.credential
                                    // ...
                              })
                  }}
            >
                  login with facebook
            </button>
      )
}

export default LoginFacebookButton
