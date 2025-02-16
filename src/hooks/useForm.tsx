import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAppointment } from "../types/type";
import dayjs from "dayjs";
import { Bounce, toast } from "react-toastify";
import { useForm } from "react-hook-form";

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

const CustomUseForm = (onSubmit: (newAppoint: IAppointment) => void) => {
  const [appointment, setAppointment] = useState<IAppointment>(initValue);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const { reset, setValue } = useForm<IAppointment>();

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
    const userData = { ...data, id: loggedInUser.id };
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
      navigate("/patient-dashboard");
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

  const getDisabledHours = () => {
    const hours = [...Array(24)].map((_, i) => i);
    return {
      disabledHours: () => hours.filter((hour) => hour < 9 || hour >= 19),
    };
  };

  return {
    handleConfirmation,
    handleDateChange,
    handleTimeChange,
    onSubmitForm,
    getDisabledHours,
    setOpenDialog,
    appointment,
    openDialog,
  };
};

export default CustomUseForm;