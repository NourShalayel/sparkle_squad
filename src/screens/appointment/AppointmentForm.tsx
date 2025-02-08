import { useState } from "react";
import { IAppointment } from "../../types/type";
import FormField from "../../components/FormField";
import Dialog from "../../components/Dialog";
import { ArrowRight } from "@phosphor-icons/react";
import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import "antd/dist/reset.css";

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

  const newAppointment = (filed: string, value: any) => {
    const Appoint = {
      ...appointment,
      [filed]: value,
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

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    setAppointment({
      ...appointment,
      pickDate: date ? date.format("YYYY-MM-DD") : "",
    });
  };

  const handleTimeChange = (time: dayjs.Dayjs | null) => {
    setAppointment({
      ...appointment,
      pickTime: time ? time.format("HH:mm") : "",
    });
  };
  return (
    <form className="wrapper" onSubmit={handleOpenDialog}>
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
            onChange={(e)=>newAppointment('userName',e.target.value)}
            placeholder="Type here"
          />
          <FormField
            label={"Phone Number"}
            
            type={"text"}
            value={appointment.patientPhone.toString()}
            name={"patientPhone"}
            onChange={(e)=>newAppointment('patientPhone',e.target.value)}
            placeholder="Type here"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <FormField
            label="Gender"
            type="select"
            name="gender"
            value={appointment.gender}
            options={["Male", "Female"]}
            onChange={(e)=>newAppointment('gender',e.target.value)}
            
            />
          <FormField
            label={"Age"}
            type={"number"}
            value={appointment.age.toString()}
            name={"age"}
            onChange={(e)=>newAppointment('age',e.target.value)}
            />
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <FormField
            type="select"
            options={reasonsToVisit}
            label={"Reason for Visit"}
            value={appointment.reason}
            name={"reason"}
            onChange={(e)=>newAppointment('reason',e.target.value)}
            />
          <FormField
            type="select"
            options={departments}
            label={"Department"}
            value={appointment.department}
            name={"department"}
            onChange={(e)=>newAppointment('department',e.target.value)}
            />
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
          </div>
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
