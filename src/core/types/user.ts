import { User as FirebaseAuthUser, UserInfo, UserMetadata } from "firebase/auth";
import { EventId } from "./event";
import { FirebaseAuth } from "react-firebaseui";

export type FirebaseUser = FirebaseAuthUser
export type UserId = number;




export class User  {
    auth?: FirebaseUser;
    id?: UserId;
    userEvents: EventId[];
    hostedEvents: EventId[];

    constructor(
        authUser?: FirebaseUser
    ) {
        if (authUser) {
            this.auth = authUser;
            this.userEvents = [];
            this.hostedEvents = [];
        }

        this.userEvents = [];
        this.hostedEvents = [];
    }
}










export interface DbUser {
    id: UserId;
    display_name: string; // key name here isnt great as its supposed to match db
    email: string;
}




export class AuthUser {
    displayName: string | null;
    email: string | null;
    metadata: UserMetadata
    photoURL: string | null;
    providerData: UserInfo[]
    refreshToken: string | null;
    
    constructor(firebaseUser: FirebaseUser) {
        this.displayName = firebaseUser.displayName;
        this.email = firebaseUser.email;
        this.metadata = firebaseUser.metadata;
        this.photoURL = firebaseUser.photoURL;
        this.providerData = firebaseUser.providerData;
        this.refreshToken = firebaseUser.refreshToken;
    }
}
