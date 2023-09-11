import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { calendarSlice } from "./slices/calendarSlice";
import { userSlice } from "./slices/userSlice";
import { CalendarData } from "../core/types/calendar";
import { User } from "../core/types/user";

export interface RootState {
    calendar: CalendarData;
    user: User;
}

const store = configureStore({
    reducer: {
        calendar: calendarSlice.reducer,
        user: userSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
