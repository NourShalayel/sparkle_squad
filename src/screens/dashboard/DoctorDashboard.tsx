import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/local-storage.hook";
import { IAppointment } from "../../types/type";
import DoctorDashboardChart from "./DoctorDashboardChart";


const DoctorDashboard = () => {
  const [appointments, setAppointments] = useLocalStorage<IAppointment[]>("Appointment-Info", []);
  const [todayAppointments, setTodayAppointments] = useState<IAppointment[]>([]);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const todayAppoint = appointments.filter((appointment) => appointment.pickDate === today);
    setTodayAppointments(todayAppoint);
  }, [appointments]);

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 gap-6">
        <div className="flex justify-center items-center gap-6">
          <div className="bg-white p-5 rounded-lg shadow w-1/3 text-center">
            <h3 className="text-gray-600">Total Appointments Today</h3>
            <p className="text-3xl font-bold">{todayAppointments.length}</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow w-1/3 text-center">
            <h3 className="text-gray-600">Pending vs. Confirmed</h3>
            <p>Pending: -</p>
            <p>Confirmed: -</p>
          </div>
        </div>

        <div className="col-span-3">
          <DoctorDashboardChart appointments={appointments} />
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;