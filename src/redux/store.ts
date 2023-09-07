import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice } from "./calendarSlice";
// import { calendarReducer } from "./reducers/calendarReducer";

const store = configureStore({
    reducer: {
        calendar: calendarSlice.reducer,
    },
});

export default store;
