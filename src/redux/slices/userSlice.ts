import { User, AuthUser, FirebaseUser } from "@/src/core/types/user";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";



type UserAction<PayloadType> = PayloadAction<PayloadType>;

type UserAction_LoginUser = {
    type: string;
    payload: User
}

export const userSlice = createSlice({
    name: "user",
    initialState: new User(),
    reducers: {
        loginUser: (state, action: UserAction<FirebaseUser>) => new User(action.payload),
        logoutUser: () => new User(),
    },
});
