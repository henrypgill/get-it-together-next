import Link from "next/link";


export function Header():JSX.Element {


    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/user-login">link 1</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}