import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { handleSignOut } from "./app/user-login/configureFirebase";



export function Navigation(): JSX.Element {

    const user = useSelector((state: RootState) => state.user);


    return (
        <>
        <nav>
        <ul className="nav-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/app/">App</Link></li>
            <li><Link href="/app/calendar">Calendar</Link></li>
        </ul>
    </nav>
    </>
    )
}