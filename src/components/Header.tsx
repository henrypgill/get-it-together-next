import Link from "next/link";
import "../styles/header.css";

export function Header(): JSX.Element {
    return (
        <header>
            <div className="header-content">
                <nav>
                    <ul className="nav-list">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/calendar">Calendar</Link>
                        </li>
                        <li></li>
                    </ul>
                </nav>
                <div className="user-info-container">
                    <h3>
                        <Link href="/user-login">Log In</Link>
                    </h3>
                </div>
            </div>
        </header>
    );
}
