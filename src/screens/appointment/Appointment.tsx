
import doctorImg from "../../assets/contactUs-bg.png";
import AppointmentForm from "./AppointmentForm";
import ContactUs from "../contactUs/ContactUs";
import { IAppointment } from "../../types/type";
import useLocalStorage from "../../hooks/local-storage.hook";

const Appointment = () => {
  const [appointments, setAppointments]=useLocalStorage<IAppointment>("Appointment-Info",[])
  const handleAppointment = (newAppoint: IAppointment) => {
    setAppointments([...appointments, newAppoint]);
    console.log('Hi form parent',newAppoint);
    
  };
  return (
    <>
      <section className="bg-[linear-gradient(to_right,#71b5fa_0%,#B6F8FF_49%,#82D3FF_100%)] pt-8">
        <div className="wrapper flex flex-col md:flex-row justify-center items-center container mx-auto px-6 md:gap-5">
          {/* Left */}
          <div className="w-full md:w-1/2">
            <img
              src={doctorImg}
              alt="Doctor illustration"
              className="w-full max-w-sm mx-auto"
            />
          </div>
          {/* Right*/}
          <div className="text-center w-full md:text-left md:w-1/2 mb-6">
            <h2 className="text-mainText font-bold text-2xl md:text-2xl lg:text-6xl	">
              Don't Let Your Health Take a Backseat!
            </h2>
            <p className="text-sky-700 mt-4 text-sm lg:text-lg">
              Fill out the appointment form below to schedule a constitution
              with ine of our healthcare professionals.
            </p>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto mt-12 wrapper gap-6 justify-center">
        <div className="">
          <AppointmentForm onSubmit={handleAppointment} />
        </div>
        <div>
          <ContactUs />
        </div>
      </div>
    </>
  );
};

export default Appointment;
