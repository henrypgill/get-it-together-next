import { configureStore } from "@reduxjs/toolkit";
import { CalendarData } from "../core/types/calendar";
import { User } from "../core/types/user";
import calendarReducer from "./slices/calendarSlice";
import userReducer from "./slices/userSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
    reducer: {
        calendar: calendarReducer,
        user: userReducer,
    },
});

export default store;



export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector