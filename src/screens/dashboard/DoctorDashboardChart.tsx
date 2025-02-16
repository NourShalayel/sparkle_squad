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
    <div className="flex justify-center items-center gap-8">
      <div className="bg-[linear-gradient(to_right,#71b5fa_0%,#B6F8FF_49%,#82D3FF_100%)] p-6 rounded-xl shadow-xl w-1/2">
        <h3 className="text-[#1A2A42] text-2xl font-semibold mb-4 text-center">Monthly Appointment Statistics</h3>
        <ResponsiveContainer  width="100%"  height={350}>
          <BarChart data={chartDataMonthly} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" stroke="#1A2A42" />
            <YAxis stroke="#1A2A42" />
            <Tooltip contentStyle={{ backgroundColor: "#395580", color: "white" }} />
            <Legend wrapperStyle={{ color: "white" }} />
            <Bar dataKey="appointments" fill="#1A2A42" radius={[5, 5, 0, 0]} />
            <Bar dataKey="canceled" fill="#EF4444" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-[linear-gradient(to_right,#71b5fa_0%,#B6F8FF_49%,#82D3FF_100%)] p-6 rounded-xl shadow-xl w-1/2">
        <h3 className="text-[#1A2A42] text-center text-2xl font-semibold mb-4">Daily Appointment Statistics</h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={chartDataDaily} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" stroke="#1A2A42" />
            <YAxis stroke="#1A2A42" />
            <Tooltip contentStyle={{ backgroundColor: "#2D3B55", color: "white" }} />
            <Legend wrapperStyle={{ color: "white" }} />
            <Bar dataKey="appointments" fill="#1A2A42" radius={[5, 5, 0, 0]} />
            <Bar dataKey="canceled" fill="#EF4444" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DoctorDashboardChart;
