import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/local-storage.hook";
import { IAppointment } from "../../types/type";
import DoctorDashboardChart from "./DoctorDashboardChart";
import { UserCheck, UserCircleGear, Users } from "@phosphor-icons/react";

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useLocalStorage<IAppointment[]>(
    "Appointment-Info",
    []
  );
  const [todayAppointments, setTodayAppointments] = useState<IAppointment[]>(
    []
  );
  const [pendingCount, setPendingCount] = useState(0);
  const [confirmedCount, setConfirmedCount] = useState(0);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const todayAppoint = appointments.filter(
      (appointment) => appointment.pickDate === today
    );
    setTodayAppointments(todayAppoint);

    const pendingAppoint = appointments.filter(
      (appointment) => appointment.status === "Pending"
    );
    const confirmedAppoint = appointments.filter(
      (appointment) => appointment.status === "Confirmed"
    );
    setConfirmedCount(confirmedAppoint.length);
    setPendingCount(pendingAppoint.length);
  }, [appointments]);

  return (
    <>
      <div className="p-6 min-h-screen mt-16">
        <h2 className="text-5xl font-bold text-center text-mainText ">
          Doctor Dashboard Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <div className="flex items-center gap-4">
              <Users size={42} className="text-[#4285F4]" />
              <h3 className="text-gray-600 text-lg font-medium">
                Total Appointments Today
              </h3>
            </div>
            <p className="text-4xl font-bold text-[#4285F4] mt-2">
              {todayAppointments.length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <div className="flex items-center gap-4">
              <UserCircleGear size={42} className="text-[#FF3D57]" />
              <h3 className="text-gray-600 text-lg font-medium">
                Pending Appointments
              </h3>
            </div>
            <p className="text-4xl font-bold text-[#FF3D57] mt-2">
              {pendingCount}
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <div className="flex items-center gap-4">
              <UserCheck size={42} className="text-[#34A853]" />
              <h3 className="text-gray-600 text-lg font-medium">
                Confirmed Appointments
              </h3>
            </div>
            <p className="text-4xl font-bold text-[#34A853] mt-2">
              {confirmedCount}
            </p>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-gray-600 text-lg font-medium mb-4">
              Appointment Trends
            </h3>
            <DoctorDashboardChart appointments={appointments} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDashboard;
