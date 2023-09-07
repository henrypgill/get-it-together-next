import { createSlice } from "@reduxjs/toolkit";
import {
    getInitialCalendarState,
    stepMonth,
    stepYear,
} from "../app/calendar/calendarUtils";
// import { CalendarData } from "../components/Calendar/CalendarData";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CalendarPayload {
    value: number;
}

export const calendarSlice = createSlice({
    name: "calendar",
    initialState: getInitialCalendarState(),
    reducers: {
        stepYear: {
            reducer: (state, action: PayloadAction<CalendarPayload>) => {
                stepYear(action.payload.value, state);
            },
            prepare: (value: number) => {
                return { payload: { value } };
            },
        },
        stepMonth: {
            reducer: (state, action: PayloadAction<CalendarPayload>) => {
                stepMonth(action.payload.value, state);
            },
            prepare: (value: number) => {
                return { payload: { value } };
            },
        },
    },
});
