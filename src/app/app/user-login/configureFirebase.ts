import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { redirect } from "next/navigation";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

export function configureFirebase() {
    const firebaseConfig = getFirebaseConfig();
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    return { app, auth };
}

export function getFirebaseConfig(): FirebaseOptions {
    const firebaseConfig = {
        apiKey: "AIzaSyCsc4-rLCRoFRhRpUmCNM2HUuD_Q6DtjN4",
        authDomain: "get-it-together-8e684.firebaseapp.com",
        projectId: "get-it-together-8e684",
        storageBucket: "get-it-together-8e684.appspot.com",
        messagingSenderId: "143048422202",
        appId: "1:143048422202:web:22a76321e553dcecdc1603",
    };
    return firebaseConfig;
}

const firebaseConfig = getFirebaseConfig();
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export function handleSignOut() {
    auth.signOut();
    redirect("/app");
}

export function getFirebaseUiConfig() {
    const uiConfig = {
        signInFlow: "popup",
        signInSuccessUrl: "/app",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false,
        },
    };
    return uiConfig;
}
