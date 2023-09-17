"use client";
import store from "@/src/redux/store";
import { Provider } from "react-redux";
import "../globals.css";
import { AppHeader } from "./AppHeader";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Provider store={store}>
            <AppHeader />
            <main>
                <div className="main-content-container">{children}</div>
            </main>
        </Provider>
    );
}
