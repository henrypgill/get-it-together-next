import { AuthUser, User, createAuthUser, createInitialUser } from "@/src/core/types/user";
import type { PayloadAction, PrepareAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {
    User as FirebaseAuthUser
} from "firebase/auth";
import { act } from "react-dom/test-utils";

type UserAction<PayloadType> = PayloadAction<PayloadType>;

type UserAction_LoginUser = {
    type: string;
    payload: User;
};


export const userSlice = createSlice({
    name: "user",
    initialState: createInitialUser(),
    reducers: {
        // loginUser: {
        //     reducer: (
        //         state,
        //         action: UserAction<AuthUser>
        //     ) => {
        //         console.log(action.payload);
        //         state.auth = action.payload;
        //     },
        //     prepare: (value: FirebaseAuthUser) => {
        //         const authUser = createAuthUser(value);
        //         return { payload: authUser };
        //     },
        // },
        loginUser: (state, action: UserAction<AuthUser>) => {state.auth = action.payload},
        logoutUser: () => createInitialUser(),
    },
});
