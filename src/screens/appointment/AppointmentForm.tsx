import { useState } from "react";
import { IAppointment } from "../../types/type";
import FormField from "../../components/FormField";
import Dialog from "../../components/Dialog";
import { ArrowRight } from "@phosphor-icons/react";

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
  patientPhone: 0,
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
  const newAppointment = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    const Appoint = {
      ...appointment,
      [name]: value,
    };
    setAppointment(Appoint);
  };
  const handleSubmit = () => {
    onSubmit(appointment);
    console.log(appointment);
    setAppointment(initValue);
    setOpenDialog(false);
  };
  const handleOpenDialog = (e: React.FormEvent) => {
    e.preventDefault();
    setOpenDialog(true);
  };
  return (
    <form className="wrapper py-10" onSubmit={handleOpenDialog}>
      <div className="border rounded-2xl m-auto p-10 ">
        <h2 className="text-center text-mainText font-bold text-4xl">
          Appointment
        </h2>
        <div className="divider"></div>
        <div className="flex flex-col md:flex-row gap-5">
          <FormField
            label={"Name"}
            type={"text"}
            value={appointment.userName}
            name={"userName"}
            onChange={newAppointment}
          />
          <FormField
            label={"Phone Number"}
            type={"text"}
            value={appointment.patientPhone.toString()}
            name={"patientPhone"}
            onChange={newAppointment}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <FormField
            label="Gender"
            type="select"
            name="gender"
            value={appointment.gender}
            options={["Male", "Female"]}
            onChange={newAppointment}
          />
          <FormField
            label={"Age"}
            type={"number"}
            value={appointment.age.toString()}
            name={"age"}
            onChange={newAppointment}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-4">
          <FormField
            type="select"
            options={reasonsToVisit}
            label={"Reason for Visit"}
            value={appointment.reason}
            name={"reason"}
            onChange={newAppointment}
          />
          <FormField
            type="select"
            options={departments}
            label={"Department"}
            value={appointment.department}
            name={"department"}
            onChange={newAppointment}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-4">
          <FormField
            label={"Appointment Date"}
            type={"date"}
            value={appointment.pickDate}
            name={"pickDate"}
            onChange={newAppointment}
          />
          <FormField
            label={"Appointment Time"}
            type={"time"}
            value={appointment.pickTime}
            name={"pickTime"}
            onChange={newAppointment}
          />
        </div>
        <div className="flex justify-center md:justify-start">
          <button
            type="button"
            onClick={() => setOpenDialog(true)}
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
          onSubmitForm={handleSubmit}
          onClose={() => setOpenDialog(false)}
        />
      )}
    </form>
  );
};

export default AppointmentForm;
