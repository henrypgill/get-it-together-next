import Image from "next/image";
// import styles from "./page.module.css";
import "../styles/style.css"
import { Header } from "../components/Header";

export default function Home(): JSX.Element {
  return (
    <>
    <Header />
    <main>
      <div><h1>test</h1></div>
    </main>
    </>
  );
}
