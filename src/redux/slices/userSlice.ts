import { getInitialEventState } from "@/src/core/eventUtils";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type UserAction<PayloadType> = PayloadAction<PayloadType>;

interface UserPayload_setUser {
    user_id: number;
    date_day: number;
    date_monthIndex: number;
    date_year: number;
}

export const calendarSlice = createSlice({
    name: "calendar",
    initialState: getInitialEventState(),
    reducers: {
        addUserDate: {
            reducer: (
                state,
                action: UserAction<EventPayload_addEventDate>
            ) => {},
            prepare: (value: EventPayload_addEventDate) => {
                return { payload: value };
            },
        },
    },
});
