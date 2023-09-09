"use client";

import store from "@/src/redux/store";
import { Provider } from "react-redux";
import { CalendarApp } from "./CalendarApp";

export default function Calendar() {
    return (
        <Provider store={store}>
            <CalendarApp />
        </Provider>
    );
}
