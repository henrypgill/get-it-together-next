import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
