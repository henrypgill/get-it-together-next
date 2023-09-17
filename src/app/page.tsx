import "../styles/app.css";
import { Footer } from "./Footer";
import { Header } from "./Header";

export default function Home(): JSX.Element {
    return (
        <>
            <Header />
            <main>
                <div className="main-content-container">
                    <section className="home-page-title-section">
                        <h1 className="home-page-title">Get It Together</h1>
                        <h2 className="home-page-subtitle">
                            Plan things together, choose a where, choose a when,
                            choose a why, and choose a how.
                        </h2>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
