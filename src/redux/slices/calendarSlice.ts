import { createSlice } from "@reduxjs/toolkit";
import {
    getInitialCalendarState,
    setCalendarYear,
    setMonth,
    stepMonth,
    stepYear,
} from "../../app/calendar/calendarUtils";
// import { CalendarData } from "../components/Calendar/CalendarData";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CalendarPayload_number {
    value: number;
}

export const calendarSlice = createSlice({
    name: "calendar",
    initialState: getInitialCalendarState(),
    reducers: {
        stepYear: {
            reducer: (state, action: PayloadAction<CalendarPayload_number>) => {
                stepYear(action.payload.value, state);
            },
            prepare: (value: number) => {
                return { payload: { value } };
            },
        },
        stepMonth: {
            reducer: (state, action: PayloadAction<CalendarPayload_number>) => {
                stepMonth(action.payload.value, state);
            },
            prepare: (value: number) => {
                return { payload: { value } };
            },
        },
        setYear: {
            reducer: (state, action: PayloadAction<CalendarPayload_number>) => {
                setCalendarYear(action.payload.value, state);
            },
            prepare: (value: number) => {
                return { payload: { value } };
            },
        },
        setMonth: {
            reducer: (state, action: PayloadAction<CalendarPayload_number>) => {
                setMonth(action.payload.value, state);
            },
            prepare: (value: number) => {
                return { payload: { value } };
            },
        },
    },
});
