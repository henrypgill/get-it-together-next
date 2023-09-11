"use client";

/* eslint-disable @next/next/no-sync-scripts */
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { initializeApp } from "firebase/app";
import { configureFirebase } from "./configureFirebase";
import { SignInScreen } from "./signInScreen";

export default function UserLogin() {
    return <SignInScreen />;
}
