import * as yup from "yup";

const schema = yup.object({
  userName: yup.string().required("Name is required"),
  patientPhone: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  age: yup.number().positive().integer().required("Age is required"),
  gender: yup.string().required("Gender is required"),
  reason: yup.string().required("Reason for visit is required"),
  department: yup.string().required("Department is required"),
  pickDate: yup.string().required("Appointment date is required"),
  pickTime: yup.string().required("Appointment time is required"),
});

export default schema;
