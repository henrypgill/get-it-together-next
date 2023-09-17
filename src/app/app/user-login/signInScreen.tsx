import { FirebaseUser, User } from "@/src/core/types/user";
import { userSlice } from "@/src/redux/slices/userSlice";
import store, { RootState } from "@/src/redux/store";
import "firebase/compat/auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useSelector } from "react-redux";
import { auth, getFirebaseUiConfig } from "./configureFirebase";

export function SignInScreen(): JSX.Element {
    const user = useSelector((state: RootState) => state.user);

    useEffect(() => {
        debugger
        const unsubscribe = auth.onAuthStateChanged((logInUser) => {
            if (logInUser) {
                // const authUser = new AuthUser(logInUser )
                store.dispatch(
                    userSlice.actions.loginUser(
                        new User(logInUser as FirebaseUser)
                    )
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
