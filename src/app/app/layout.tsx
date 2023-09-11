"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Provider } from "react-redux";
import store from "@/src/redux/store";
import { AppHeader } from "./AppHeader";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Provider store={store}>
            <AppHeader />
            {children}
        </Provider>
    );
}
