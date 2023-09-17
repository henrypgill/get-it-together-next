import { RootState } from "@/src/redux/store";
import { useSelector } from "react-redux";
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
