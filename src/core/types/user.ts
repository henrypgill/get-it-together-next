import { User as FireBaseAuthUser } from "firebase/auth";
import { EventId } from "./event";

export type AuthUser = FireBaseAuthUser;
export type UserId = number;

export interface DbUser {
    id: UserId;
    displayName: string;
    email: string;
}

export interface IUser extends DbUser {
    auth: AuthUser | undefined;
    user_events: EventId[];
    hosted_events: EventId[];
}

export class User implements IUser {
    id: number;
    displayName: string;
    email: string;
    auth: AuthUser | undefined;
    user_events: EventId[];
    hosted_events: EventId[];

    constructor(
        id: number = -1,
        displayName: string = "",
        email: string = "",
        authUser?: AuthUser
    ) {
        if (authUser){
            this.auth = authUser;

        }



        this.id = id;
        this.displayName = displayName;
        this.email = email;
        this.user_events = [];
        this.hosted_events = [];
    }
}
