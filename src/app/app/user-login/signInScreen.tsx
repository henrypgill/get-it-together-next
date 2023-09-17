import { FirebaseUser, createAuthUser } from "@/src/core/types/user";
import { userActions, userSlice } from "@/src/redux/slices/userSlice";
import store, { RootState, useAppDispatch, useAppSelector } from "@/src/redux/store";
import "firebase/compat/auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useSelector } from "react-redux";
import { auth, getFirebaseUiConfig } from "./configureFirebase";

export function SignInScreen(): JSX.Element {
    const user = useAppSelector((state: RootState) => state.user);
    const dispatch = useAppDispatch();
    console.log("user", user);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((logInUser) => {
            if (logInUser) {
                dispatch(
                    userActions.loginUser(
                        createAuthUser(logInUser as FirebaseUser)
                    )
                );
            } else {
                dispatch(userActions.logoutUser());
            }
        });
        return () => unsubscribe();
    }, []);

    if (!user.auth.uid) {
        return (
            <div>
                <h1>My App</h1>
                <p>Please sign-in:</p>
                <StyledFirebaseAuth
                    uiConfig={getFirebaseUiConfig()}
                    firebaseAuth={auth}
                />
            </div>
        );
    } else if (user) {
        return <>{redirect("/app")}</>;
    } else {
        return <h1>error</h1>;
    }
}

export default SignInScreen;
