import { useState, useEffect } from "react";
import { IAppointment } from "../types/type";
import { useLocation } from "react-router-dom";

const Doctor = () => {
  const location = useLocation();
  const doctors = location.state;
  const [appointment, setAppointment] = useState<IAppointment[]>([]); // تخزين جميع المواعيد في مصفوفة
  useEffect(() => {
    const savedAppointments = localStorage.getItem("Appointment-Info");
    if (savedAppointments) {
      try {
        const parsedAppointments = JSON.parse(savedAppointments);
        if (Array.isArray(parsedAppointments)) {
          setAppointment(parsedAppointments);
        } else {
          console.error(
            "Stored appointments are not an array:",
            parsedAppointments
          );
          setAppointment([]);
        }
      } catch (error) {
        console.error("Error parsing appointment data:", error);
        setAppointment([]);
      }
    }
  }, []);

  const handelName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    console.log(name);
  };
  if (!doctors) return <p className="text-red-500">No doctor data available</p>;

  return (
    <div className="flex flex-col space-y-6 p-6 bg-white min-h-screen items-center">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl flex items-center gap-10">
        <img
          src={doctors.image}
          alt={doctors.name}
          className="w-40 h-40 object-cover rounded-full border-2 border-blue-400"
        />
        <div>
          <h2 className="text-xl font-bold text-blue-600">{doctors.name}</h2>
          <p className="text-gray-600 italic">{doctors.specialty}</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder=" Search"
          onChange={handelName}
          className="flex-1 p-2 ml-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white placeholder-gray-500 "
        />
        <select className="p-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer">
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
        </select>
      </div>

      {appointment && (
        <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-lg w-full max-w-xl">
          <h3 className="text-lg font-bold text-blue-600">
            Appointment Details
          </h3>
          <div>
            {appointment.map((appointment, index) => (
              <div
                key={index}
                className="p-4 mt-4 bg-gray-100 rounded-lg shadow-lg"
              >
                <p>
                  <strong>Name:</strong> {appointment.userName}
                </p>
                <p>
                  <strong>Specialty:</strong> {appointment.patientPhone}
                </p>
                <p>
                  <strong>Age:</strong> {appointment.age}
                </p>
                <p>
                  <strong>Gender:</strong> {appointment.gender}
                </p>
                <p>
                  <strong>Reason:</strong> {appointment.reason}
                </p>
                <p>
                  <strong>Department:</strong> {appointment.department}
                </p>
                <p>
                  <strong>Date:</strong> {appointment.pickDate}
                </p>
                <p>
                  <strong>Time:</strong> {appointment.pickTime}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctor;
