import { useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { IAppointment } from "../../types/type";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

interface Props {
  appointments: IAppointment[];
}

const DoctorDashboardChart = ({ appointments }: Props) => {
  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const chartDataMonthly = useMemo(() => {
    const appointmentCountByMonth: Record<string, { name: string; appointments: number; canceled: number }> = {};

    months.forEach((month) => {
      appointmentCountByMonth[month] = { name: month, appointments: 0, canceled: 0 };
    });

    appointments.forEach((appointment) => {
      const date = new Date(appointment.pickDate);
      const monthName = months[date.getMonth()];

      if (appointmentCountByMonth[monthName]) {
        appointmentCountByMonth[monthName].appointments += 1;
      }
    });

    return Object.values(appointmentCountByMonth);
  }, [appointments]);

  const chartDataDaily = useMemo(() => {
    const appointmentCountByDay: Record<string, { name: string; appointments: number; canceled: number }> = {};

    appointments.forEach((appointment) => {
      const date = new Date(appointment.pickDate);
      const day = formatDate(date);

      if (!appointmentCountByDay[day]) {
        appointmentCountByDay[day] = { name: day, appointments: 0, canceled: 0 };
      }
      appointmentCountByDay[day].appointments += 1;
    });

    return Object.values(appointmentCountByDay);
  }, [appointments]);

  return (
    <div className="flex justify-center items-center gap-6">
      <div className="bg-[#1A2A42] p-5 rounded-lg shadow-lg w-1/2">
        <h3 className="text-white text-lg font-semibold mb-3">Monthly Appointment Statistics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartDataMonthly} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" stroke="#FFFFFF" />
            <YAxis stroke="#FFFFFF" />
            <Tooltip contentStyle={{ backgroundColor: "#2D3B55", color: "white" }} />
            <Legend wrapperStyle={{ color: "white" }} />
            <Bar dataKey="appointments" fill="#4285F4" radius={[5, 5, 0, 0]} />
            <Bar dataKey="canceled" fill="#FF3D57" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-[#1A2A42] p-5 rounded-lg shadow-lg w-1/2">
        <h3 className="text-white text-lg font-semibold mb-3">Daily Appointment Statistics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartDataDaily} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" stroke="#FFFFFF" />
            <YAxis stroke="#FFFFFF" />
            <Tooltip contentStyle={{ backgroundColor: "#2D3B55", color: "white" }} />
            <Legend wrapperStyle={{ color: "white" }} />
            <Bar dataKey="appointments" fill="#4285F4" radius={[5, 5, 0, 0]} />
            <Bar dataKey="canceled" fill="#FF3D57" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DoctorDashboardChart;
