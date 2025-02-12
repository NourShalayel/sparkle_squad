import { useState, useEffect } from "react";
import { IAppointment } from "../types/type";
import { useLocation } from "react-router-dom";

const Doctor = () => {
  const location = useLocation();
  const doctors = location.state;
  const [appointment, setAppointment] = useState<IAppointment[]>([]);
  const [name, setName] = useState<string>("");

  if (!doctors) return <p className="text-red-500 text-xl">No doctor data available</p>;

  useEffect(() => {
    const savedAppointments = localStorage.getItem("Appointment-Info");

    if (savedAppointments) {
      try {
        const parsedAppointments = JSON.parse(savedAppointments);
        if (Array.isArray(parsedAppointments)) {
          setAppointment(parsedAppointments);
        } else {
          console.error("Stored appointments are not an array:", parsedAppointments);
          setAppointment([]);
        }
      } catch (error) {
        console.error("Error parsing appointment data:", error);
        setAppointment([]);
      }
    }
  }, []);

  const handelName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const PatientName = e.target.value;
    setName(PatientName);
  };

  const filteredAppointments = appointment.filter((appointment) =>
    appointment.userName.toLowerCase().includes(name.toLowerCase())
  );
 
  const sortedAppointments = filteredAppointments.sort((a, b) => {
    const dateA = new Date(a.pickDate);//تنازلي من الاحدث
    const dateB = new Date(b.pickDate);
    return dateB.getTime() - dateA.getTime();
  });



  return (
    <div className="flex flex-col space-y-6 p-6 bg-sky-50 min-h-screen items-center">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl flex items-center gap-10 border border-gray-200">
        <img
          src={doctors.image}
          alt={doctors.name}
          className="w-40 h-40 object-cover rounded-full border-4 border-blue-400 shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold text-blue-700">{doctors.name}</h2>
          <p className="text-gray-600 italic">{doctors.specialty}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full max-w-5xl gap-4">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search by Name"
            onChange={handelName}
            value={name}
            className="flex-1 p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder-gray-500"
          />
          <select className="p-3 border-2 border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
          </select>
        </div>
      </div>


      {sortedAppointments.length > 0 ? (
        <div className="mt-6 w-full max-w-5xl">
          {sortedAppointments.map((appointment, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg mb-4 border-2 border-gray-100 hover:shadow-xl transition duration-300 ease-in-out"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-3">Appointment Details</h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Name:</strong> {appointment.userName}
                </p>
                <p>
                  <strong>Phone:</strong> {appointment.patientPhone}
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
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-lg">No appointments found with that name.</p>
      )}
    </div>
  );
};

export default Doctor;

    