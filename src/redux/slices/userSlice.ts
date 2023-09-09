import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserPayload {
    value: number;
}

export type userAction = PayloadAction<UserPayload>;

export const userSlice = createSlice({
    name: "user",
    initialState: "",
    reducers: {},
});
