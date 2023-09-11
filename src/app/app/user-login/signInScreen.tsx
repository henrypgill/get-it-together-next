import React, { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirebaseConfig } from "./configureFirebase";
import store, { RootState } from "@/src/redux/store";
import { useSelector } from "react-redux";
import { userSlice } from "@/src/redux/slices/userSlice";
import { AuthUser, FirebaseUser, User } from "@/src/core/types/user";

export function SignInScreen(): JSX.Element {
    const user = useSelector((state: RootState) => state.user);

    const firebaseConfig = getFirebaseConfig();
    firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();

    const uiConfig = {
        signInFlow: "popup",
        signInSuccessUrl: "/",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false,
        },
    };


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((logInUser) => {
            if (logInUser) {
                // const authUser = new AuthUser(logInUser )
                store.dispatch(
                    userSlice.actions.loginUser(new User(logInUser as FirebaseUser))
                ); //TODO: Danger with the as statement here, need to find a better solution.
            } else {
                store.dispatch(userSlice.actions.logoutUser());
            }
        });
        return () => unsubscribe();
    }, []);

    if (!user.auth) {
        return (
            <div>
                <h1>My App</h1>
                <p>Please sign-in:</p>
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            </div>
        );
    } else if (user) {
        return (
            <div>
                <h1>My App</h1>
                <p>Welcome {user.auth.displayName}! You are now signed-in!</p>
                <button onClick={() => firebase.auth().signOut()}>
                    Sign-out
                </button>
            </div>
        );
    } else {
        return <h1>error</h1>;
    }
}

export default SignInScreen;
