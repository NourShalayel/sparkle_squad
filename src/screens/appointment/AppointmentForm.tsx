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
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
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
const initValue = {
  userName: "",
  patientPhone: "",
  age: 0,
  gender: "",
  reason: "",
  description: "",
  pickDate: "",
  pickTime: "",
};
interface IProps {
  onSubmit: (newAppoint: IAppointment) => void;
}
const AppointmentForm = ({ onSubmit }: IProps) => {
  const [appointment, setAppointment] = useState<IAppointment>(initValue);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IAppointment>({ resolver: yupResolver(AppointmentSchema) });

  const handleConfirmation = () => {
    onSubmit(appointment);
    const existingAppointments: IAppointment[] = JSON.parse(
      localStorage.getItem("Appointment-Info") || "[]"
    );
    const updatedAppointments = [...existingAppointments, appointment];
    localStorage.setItem(
      "Appointment-Info",
      JSON.stringify(updatedAppointments)
    );
    toast.success("Your Appointment booked successfully!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    reset();
    setAppointment(initValue);
    setOpenDialog(false);
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
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
  const isDuplicateAppointment = (newAppointment: IAppointment): boolean => {
    const existingAppointments: IAppointment[] = JSON.parse(
      localStorage.getItem("Appointment-Info") || "[]"
    );
    return existingAppointments.some(
      (appointment) =>
        appointment.pickDate === newAppointment.pickDate &&
        appointment.pickTime === newAppointment.pickTime
    );
  };

  const onSubmitForm = (data: IAppointment) => {
    console.log("Form submitted:", data);
    const loggedInUser = JSON.parse(
      localStorage.getItem("loggedInUser") || "null"
    );
    const userData = { ...data, userId: loggedInUser.id };

    if (isDuplicateAppointment(data)) {
      toast.error("This appointment is already booked!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }
    setAppointment(userData);
    setOpenDialog(true);
  };

  const getDisabledHours = () => {
    const hours = [...Array(24)].map((_, i) => i);
    return {
      disabledHours: () => hours.filter((hour) => hour < 9 || hour >= 19),
    };
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
            />
            {errors.patientPhone && (
              <p className="text-red-500 text-sm">
                {errors.patientPhone.message}
              </p>
            )}
          </label>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <label className="form-control w-full mt-4">
            Gender
            <select
              {...register("gender")}
              className="form-select custom_input"
              defaultValue=""
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
              defaultValue=""
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
            Description
            <textarea
              {...register("description")}
              placeholder="Type here"
              className="custom_input mt-2 py-3"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
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
              defaultValue={dayjs("09:00", "HH:mm")}
              disabledTime={getDisabledHours}
              onChange={handleTimeChange}
              format="HH:mm"
              showNow={false}
              hideDisabledOptions={true}
              allowClear
              minuteStep={30}
              use12Hours
              className="custom_input w-full "
            />
            {errors.pickTime && (
              <p className="text-red-500 text-sm">{errors.pickTime.message}</p>
            )}
          </div>
        </div>
        <div className="flex justify-center md:justify-start">
          <button
            type="submit"
            className="custom-btn btn mt-10 bg-[#9ee5ff] text-mainText border-none text-lg shadow-sm shadow-[#6295b1]"
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
