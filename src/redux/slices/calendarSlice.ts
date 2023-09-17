import { createSlice } from "@reduxjs/toolkit";
import {
    getInitialCalendarState,
    setCalendarYear,
    setMonth,
    stepMonth,
    stepYear,
} from "../../core/calendarUtils";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CalendarPayload<T> {
    value: T;
}

type CalendarAction<PayloadType> = PayloadAction<CalendarPayload<PayloadType>>;

export const calendarSlice = createSlice({
    name: "calendar",
    initialState: getInitialCalendarState(),
    reducers: {
        stepYear: {
            reducer: (state, action: CalendarAction<number>) => {
                stepYear(action.payload.value, state);
            },
            prepare: (value: number) => {
                return { payload: { value } };
            },
        },
        stepMonth: {
            reducer: (state, action: CalendarAction<number>) => {
                stepMonth(action.payload.value, state);
            },
            prepare: (value: number) => {
                return { payload: { value } };
            },
        },
        setYear: {
            reducer: (state, action: CalendarAction<number>) => {
                setCalendarYear(action.payload.value, state);
            },
            prepare: (value: number) => {
                return { payload: { value } };
            },
        },
        setMonth: {
            reducer: (state, action: CalendarAction<number>) => {
                setMonth(action.payload.value, state);
            },
            prepare: (value: number) => {
                return { payload: { value } };
            },
        },
    },
});
