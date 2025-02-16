import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/local-storage.hook";
import { IAppointment } from "../../types/type";
import DoctorDashboardChart from "./DoctorDashboardChart";


const DoctorDashboard = () => {
  const [appointments, setAppointments] = useLocalStorage<IAppointment[]>("Appointment-Info", []);
  const [todayAppointments, setTodayAppointments] = useState<IAppointment[]>([]);
  const [pendingCount, setPendingCount] = useState(0);
  const [confirmedCount, setConfirmedCount] = useState(0);
  
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const todayAppoint = appointments.filter((appointment) => appointment.pickDate === today);
    setTodayAppointments(todayAppoint);

    const pendingAppoint = appointments.filter((appointments) => appointments.status === "Pending");
    const confirmedAppoint = appointments.filter((appointments) => appointments.status === "Confirmed");
    setConfirmedCount(confirmedAppoint.length);
    setPendingCount(pendingAppoint.length);
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
            <p>Pending: {pendingCount}</p>
            <p>Confirmed: {confirmedCount}</p>
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