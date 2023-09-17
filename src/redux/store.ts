import { configureStore } from "@reduxjs/toolkit";
import { CalendarData } from "../core/types/calendar";
import { User } from "../core/types/user";
import { calendarSlice } from "./slices/calendarSlice";
import { userSlice } from "./slices/userSlice";

export interface RootState {
    calendar: CalendarData;
    user: User;
}

const store = configureStore({
    reducer: {
        calendar: calendarSlice.reducer,
        user: userSlice.reducer,
    },
});

export default store;
