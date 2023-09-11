import { User } from "@/src/core/types/user";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type UserAction<PayloadType> = PayloadAction<PayloadType>;

type UserAction_LoginUser = {
    type: string;
    payload: User;
};

export const userSlice = createSlice({
    name: "user",
    initialState: new User(),
    reducers: {
        loginUser: (state, action: UserAction<User>) => action.payload,
        logoutUser: () => new User(),
    },
});
