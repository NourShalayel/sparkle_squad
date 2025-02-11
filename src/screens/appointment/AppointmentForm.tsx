import { useState } from "react";
import { IAppointment } from "../../types/type";
import Dialog from "../../components/Dialog";
import { ArrowRight } from "@phosphor-icons/react";
import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import "antd/dist/reset.css";
import { useForm } from "react-hook-form";
import { AppointmentSchema } from "../../utils/Validation";
import { yupResolver } from "@hookform/resolvers/yup";

const reasonsToVisit: string[] = [
  "General Checkup",
  "Follow-up Appointment",
  "Prescription Refill",
  "Vaccination",
  "Lab Tests",
  "Specialist Consultation",
  "Emergency Visit",
  "Physical Therapy",
];
const departments: string[] = [
  "General Medicine",
  "Pediatrics",
  "Cardiology",
  "Dermatology",
  "Orthopedics",
  "Neurology",
  "Ophthalmology",
  "Dentistry",
  "ENT (Ear, Nose, Throat)",
  "Gynecology",
];
const initValue = {
  userName: "",
  patientPhone:"",
  age: 0,
  gender: "",
  reason: "",
  department: "",
  pickDate: "",
  pickTime: "",
};
interface IProps {
  onSubmit: (newAppoint: IAppointment) => void;
}
const AppointmentForm = ({ onSubmit }: IProps) => {
  const [appointment, setAppointment] = useState<IAppointment>(initValue);
  const [openDialog, setOpenDialog] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue, 
    formState: { errors },
  } = useForm<IAppointment>({ resolver: yupResolver(AppointmentSchema) });

  const handleConfirmation = () => {
    onSubmit(appointment);
    console.log(appointment);
    reset();
    setAppointment(initValue);
    setOpenDialog(false);
  };

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    const dateString = date ? date.format("YYYY-MM-DD") : "";
    setAppointment({ ...appointment, pickDate: dateString });
    setValue("pickDate", dateString, { shouldValidate: true });
  };

  const handleTimeChange = (time: dayjs.Dayjs | null) => {
    const timeString = time ? time.format("HH:mm") : "";
    setAppointment({ ...appointment, pickTime: timeString });
    setValue("pickTime", timeString, { shouldValidate: true });
  };

  const handleChange = (field: string, value: any) => {
    setAppointment({ ...appointment, [field]: value });
    setValue(field, value,{ shouldValidate: true });
  };

  const onSubmitForm = (data: IAppointment) => {
    if (Object.keys(errors).length === 0) {
      setOpenDialog(true);
    }
  };

  return (
    <form className="wrapper" onSubmit={handleSubmit(onSubmitForm)}>
      <div className="border rounded-2xl m-auto p-10 ">
        <h2 className="text-center text-mainText font-bold text-4xl">
          Appointment
        </h2>
        <div className="divider"></div>
        <div className="flex flex-col md:flex-row gap-5">
          <label className="form-control w-full mt-4">
            Name
            <input
              {...register("userName")}
              type="text"
              placeholder="Type here"
              className="custom_input"
              value={appointment.userName}
              onChange={(e) => handleChange("userName", e.target.value)}
            />
            {errors.userName && (
              <p className="text-red-500 text-sm">{errors.userName.message}</p>
            )}
          </label>
          <label className="form-control w-full mt-4">
            Phone Number
            <input
              {...register("patientPhone")}
              type={"text"}
              placeholder="Type here"
              className="custom_input"
              value={appointment.patientPhone}
              onChange={(e) => handleChange("patientPhone", e.target.value)}
            />
            {errors.patientPhone && (
              <p className="text-red-500 text-sm">{errors.patientPhone.message}</p>
            )}
          </label>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <label className="form-control w-full mt-4">
            Gender
            <select
              {...register("gender")}
              className="form-select custom_input"
              value={appointment.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </label>

          <label className="form-control w-full mt-4">
            Age
            <input
              {...register("age")}
              type={"text"}
              placeholder="Type here"
              className="custom_input"
              value={appointment.age}
              onChange={(e) => handleChange("age", e.target.value)}
            />
            {errors.age && (
              <p className="text-red-500 text-sm">{errors.age.message}</p>
            )}
          </label>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <label className="form-control w-full mt-4">
            Reason for visit
            <select
              {...register("reason")}
              className="form-select custom_input"
              value={appointment.reason}
              onChange={(e) => handleChange("reason", e.target.value)}
            >
              <option value="" disabled>
                Select one
              </option>
              {reasonsToVisit.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.reason && (
              <p className="text-red-500 text-sm">{errors.reason.message}</p>
            )}
          </label>

          <label className="form-control w-full mt-4">
            Department
            <select
              {...register("department")}
              className="form-select custom_input"
              value={appointment.department}
              onChange={(e) => handleChange("department", e.target.value)}
            >
              <option value="" disabled>
                Select one
              </option>
              {departments.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.department && (
              <p className="text-red-500 text-sm">{errors.department.message}</p>
            )}
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4 w-full">
          <div>
            <div className="label">Appointment date</div>
            <DatePicker
              value={appointment.pickDate ? dayjs(appointment.pickDate) : null}
              onChange={handleDateChange}
              format="YYYY-MM-DD"
              allowClear
              disabledDate={(current) =>
                current && current < dayjs().startOf("day")
              }
              className="custom_input w-full"
            />
            {errors.pickDate && (
              <p className="text-red-500 text-sm">{errors.pickDate.message}</p>
            )}
          </div>
          <div>
            <div className="label">Appointment time</div>
            <TimePicker
              value={
                appointment.pickTime
                  ? dayjs(appointment.pickTime, "HH:mm")
                  : null
              }
              onChange={handleTimeChange}
              format="HH:mm"
              allowClear
              minuteStep={30}
              use12Hours
              className="custom_input w-full"
            />
            {errors.pickTime && (
              <p className="text-red-500 text-sm">{errors.pickTime.message}</p>
            )}
          </div>
        </div>
        <div className="flex justify-center md:justify-start">
          <button
            type="submit"
            className="btn mt-10 bg-[#9ee5ff] text-mainText border-none text-lg shadow-sm shadow-[#6295b1]"
          >
            Submit
            <ArrowRight size={23} />
          </button>
        </div>
      </div>
      {openDialog && (
        <Dialog
          appointment={appointment}
          onSubmitForm={handleConfirmation}
          onClose={() => setOpenDialog(false)}
        />
      )}
    </form>
  );
};
export default AppointmentForm;
