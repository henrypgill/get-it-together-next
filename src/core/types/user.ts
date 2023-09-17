import {
    User as FirebaseAuthUser
} from "firebase/auth";
import { EventId } from "./event";

export type FirebaseUser = FirebaseAuthUser;
export type UserId = number;

export interface DbUser {
    id: UserId;
    display_name: string;
    email: string;
}
export interface AuthUser {
    uid: string;
    email: string;
    emailVerified: boolean;
    displayName: string;
    isAnonymous: boolean;
    photoURL: string;
    createdAt: string;
    lastLoginAt: string;
}
export interface User {
    auth: AuthUser;
    id: UserId;
    userEvents: EventId[];
    hostedEvents: EventId[];
}


export function createInitialUser(): User {
    return {
        auth: {} as AuthUser,
        id: 0,
        userEvents: [],
        hostedEvents: [] };
}

export function createAuthUser(firebaseAuthUser: FirebaseAuthUser): AuthUser {
    const authUser: AuthUser = {
        uid: firebaseAuthUser.uid,
        email: firebaseAuthUser.email || "",
        emailVerified: firebaseAuthUser.emailVerified,
        displayName: firebaseAuthUser.displayName || "",
        isAnonymous: firebaseAuthUser.isAnonymous,
        photoURL: firebaseAuthUser.photoURL || "",
        createdAt: firebaseAuthUser.metadata.creationTime || "",
        lastLoginAt: firebaseAuthUser.metadata.lastSignInTime || "",
    }
    return authUser;
}


// export class User {
//     auth?: FirebaseUser;
//     id?: UserId;
//     userEvents: EventId[];
//     hostedEvents: EventId[];

//     constructor(authUser?: FirebaseUser) {
//         if (authUser) {
//             this.auth = authUser;
//             this.userEvents = [];
//             this.hostedEvents = [];
//         }

//         this.userEvents = [];
//         this.hostedEvents = [];
//     }
// }

// export class AuthUser {
//     displayName: string | null;
//     email: string | null;
//     metadata: UserMetadata;
//     photoURL: string | null;
//     providerData: UserInfo[];
//     refreshToken: string | null;

//     constructor(firebaseUser: FirebaseUser) {
//         this.displayName = firebaseUser.displayName;
//         this.email = firebaseUser.email;
//         this.metadata = firebaseUser.metadata;
//         this.photoURL = firebaseUser.photoURL;
//         this.providerData = firebaseUser.providerData;
//         this.refreshToken = firebaseUser.refreshToken;
//     }
// }
