import Link from "next/link";

export function AppHeader(): JSX.Element {
    return (
        <header>
            <div className="header-content">
                <nav>
                    <ul className="nav-list">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/app/calendar">Calendar</Link>
                        </li>
                        <li></li>
                    </ul>
                </nav>
                <div className="user-info-container">
                    <h3>
                        <Link href="/app/user-login">Log In</Link>
                    </h3>
                </div>
            </div>
        </header>
    );
}
