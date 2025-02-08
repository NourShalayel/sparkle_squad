export interface User {
    fullName?: string;
    email: string;
    phone?: string;
    password: string;
    role?: UserRole
}

export enum UserRole {
    DOCTOR = 'doctor',
    PATIENT = 'patient'
}