//TODO: change out <img> for <Image>
/* eslint-disable @next/next/no-img-element */

import { RootState } from "@/src/redux/store";
import Link from "next/link";
import { useSelector } from "react-redux";
import { handleSignOut } from "./user-login/configureFirebase";

export function UserInfo(): JSX.Element {
    const user = useSelector((state: RootState) => state.user);

    if (user.auth) {
        return (
            <div>
                {
                    <img
                        src={
                            user.auth.photoURL ?? "https://placehold.co/200x200"
                        }
                        alt="profile"
                    ></img>
                }
                <h3>{user.auth.displayName}</h3>
                <button onClick={() => handleSignOut()}>Log Out</button>
            </div>
        );
    } else {
        return (
            <div>
                <Link href="/app/user-login">Log In</Link>
            </div>
        );
    }
}
