import Link from "next/link";
import { auth, handleSignOut } from "./user-login/configureFirebase";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { Navigation } from "../navigation";
import { UserInfo } from "./userInfo";

export function AppHeader(): JSX.Element {
    const user = useSelector((state: RootState) => state.user);

    return (
        <header>
            <div className="header-content">
                <Navigation />
            </div>
            <div className="user-info-container">
                <UserInfo />
            </div>
        </header>
    );
}
