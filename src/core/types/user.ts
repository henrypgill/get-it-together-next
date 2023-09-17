import { User as FirebaseAuthUser } from "firebase/auth";
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
        hostedEvents: [],
    };
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
    };
    return authUser;
}
