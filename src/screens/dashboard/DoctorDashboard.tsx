import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/local-storage.hook";
import { IAppointment } from "../../types/type";
import DoctorDashboardChart from "./DoctorDashboardChart";
import { Divider } from "antd";

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
      <section className="bg-[linear-gradient(to_right,#71b5fa_0%,#B6F8FF_49%,#82D3FF_100%)] h-44 items-center flex justify-center">
        <div className="flex flex-col mt-5">
          <h2 className="text-mainText font-medium text-2xl md:text-2xl lg:text-5xl	text-center">
            Daily Appointment Insights
          </h2>
          <Divider className="" />
        </div>
      </section>
      <div className="p-6  min-h-screen">
        <div className="grid grid-cols-1 gap-6 max-w-7xl mx-auto">
          {/* Stats Cards */}
          <div className="flex justify-center items-center gap-6">
            {/* Total Appointments Today Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-1/3 text-center transform hover:scale-105">
              <h3 className="text-gray-600 text-lg font-medium">
                Total Appointments Today
              </h3>
              <p className="text-4xl font-bold text-[#4285F4] mt-2">
                {todayAppointments.length}
              </p>
            </div>

            {/* Pending vs. Confirmed Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-1/3 text-center transform hover:scale-105">
              <h3 className="text-gray-600 text-lg font-medium">
                Pending vs. Confirmed
              </h3>
              <div className="mt-4 space-y-2">
                <p className="text-xl font-semibold text-[#FF3D57]">
                  Pending: {pendingCount}
                </p>
                <p className="text-xl font-semibold text-[#34A853]">
                  Confirmed: {confirmedCount}
                </p>
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="col-span-3 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <DoctorDashboardChart appointments={appointments} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDashboard;
