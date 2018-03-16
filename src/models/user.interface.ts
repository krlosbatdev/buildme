import { Roles } from "./roles.interface";

export interface User{
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    level?: number;
    experience?: number;
    roles?: Roles;
}