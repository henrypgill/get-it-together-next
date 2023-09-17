import { AuthUser, User, createInitialUser } from "@/src/core/types/user";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type UserAction<PayloadType> = PayloadAction<PayloadType>;

type UserAction_LoginUser = {
    type: string;
    payload: User;
};

export const userSlice = createSlice({
    name: "user",
    initialState: createInitialUser(),
    reducers: {
        loginUser: (state, action: UserAction<AuthUser>) => {
            state.auth = action.payload;
        },
        logoutUser: () => createInitialUser(),
    },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;