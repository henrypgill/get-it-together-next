import Link from "next/link";
import "../styles/footer.css"


export function Footer():JSX.Element {


    return (
        <footer>
            <div className="footer-content-container">
            <h3>Learn more about the project below</h3>
            <ul>
                <li><a href="https://github.com/henrypgill/get-it-together-next" target="_blank" rel="noreferrer">GitHub Repo</a></li>
            </ul>
            </div>
        </footer>
    )
}