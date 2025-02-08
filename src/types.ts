export interface User {
    fullName?: string;
    email: string;
    phone?: string;
    password: string;
    role?: "doctor" | "patient";
}