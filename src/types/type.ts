import { string } from "yup";

export interface IAppointment {
    userName: string;
    patientPhone: number,
    age: number,
    gender: string,
    reason: string;  
    department: string;
    pickDate: string; 
    pickTime: string;  
    id?:number;
    status?:string;
    message?:string;
}

export interface IDoctors {
    img:string;
    id: number;  
    name: string;
    specialty:string;}
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