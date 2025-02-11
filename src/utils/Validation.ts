import * as yup from "yup";
import { UserRole } from "../types/type";
const PALESTINE_MOBILE_REGEXP: RegExp = /^0(56|59)\d{7}$/;

export const AppointmentSchema = yup.object({
  userName: yup.string().required("Name is required"),
  patientPhone:  yup.string().matches(PALESTINE_MOBILE_REGEXP, "Invalid phone number").required("Phone is required"),
  age: yup.number().positive().integer().required("Age is required"),
  gender: yup.string().required("Gender is required"),
  reason: yup.string().required("Reason for visit is required"),
  department: yup.string().required("Department is required"),
  pickDate: yup.string().required("Appointment date is required"),
  pickTime: yup.string().required("Appointment time is required"),
});

export const signupSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phone: yup.string().matches(PALESTINE_MOBILE_REGEXP, "Invalid phone number").required("Phone is required"),
  password: yup.string().required("Password is required").min(3, "Password must be at least 3 characters"),
  role: yup.mixed<UserRole>().oneOf(Object.values(UserRole), 'invalid role').required("Role is Required")
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().required("Password is required"),
});


