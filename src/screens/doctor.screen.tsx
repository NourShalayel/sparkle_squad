import { useState, useEffect } from "react";
import { IAppointment } from "../types/type";
import { useLocation } from "react-router-dom";

const Doctor = () => {
  const location = useLocation();
  const doctors = location.state;
  const [appointment, setAppointment] = useState<IAppointment[]>([]);
  const [name, setName] = useState<string>("");
  const [messages, setMessages] = useState<{ [key: number]: string }>({});
  const [statusFilter, setStatusFilter] = useState<string>("All");

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
    const PatientName = e.target.value;
    setName(PatientName);
  };

  const filteredAppointments = appointment.filter(
    (appointment) =>
      appointment.userName &&
      appointment.userName.toLowerCase().includes(name.toLowerCase())
  );

  const sortedAppointments = filteredAppointments.sort((a, b) => {
    const dateA = new Date(a.pickDate);
    const dateB = new Date(b.pickDate);
    return dateB.getTime() - dateA.getTime();
  });

  const handelButton = (index: number, status: string) => {
    const allAppStatus = [...appointment];
    allAppStatus[index] = { ...allAppStatus[index], status };
    setAppointment(allAppStatus);
    localStorage.setItem("Appointment-Info", JSON.stringify(allAppStatus));
  };

  const handleMessageChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newMessage = e.target.value;
    setMessages((prevMessages) => ({ ...prevMessages, [index]: newMessage }));
  };
  const saveMessage = (index: number) => {
    const updatedAppointments = [...appointment];
    updatedAppointments[index] = {
      ...updatedAppointments[index],
      message: messages[index] || "Not Set",
    };
    setAppointment(updatedAppointments);
    localStorage.setItem(
      "Appointment-Info",
      JSON.stringify(updatedAppointments)
    );
  };

  const filteredByStatus =
    statusFilter === "All"
      ? sortedAppointments
      : sortedAppointments.filter(
          (appointment) => appointment.status === statusFilter
        );
  if (!doctors)
    return <p className="text-red-500 text-xl">No doctor data available</p>;

  return (
    <div className="flex flex-col space-y-6 p-6 bg-sky-50 min-h-screen items-center">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl flex items-center gap-10 border border-gray-200">
        <img
          src={doctors.image}
          alt={doctors.name}
          className="w-40 h-40 object-cover rounded-full border-4 border-blue-400 shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold text-blue-700">
            {doctors.name}
          </h2>
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
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-3 border-2 border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
          </select>
        </div>
      </div>

      {filteredByStatus.length > 0 ? (
        <div className="mt-6 w-full max-w-5xl">
          {filteredByStatus.map((appointment, index) => (
            <div
              key={appointment.id || index}
              className="p-6 bg-gradient-to-r from-white to-blue-50 rounded-xl shadow-lg mb-6 border border-gray-200 hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Appointment Details
              </h3>
              <div className="space-y-3 text-gray-800 text-lg">
                <p>
                  <strong>Name:</strong> {appointment.userName || "Not Set"}
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  {appointment.patientPhone || "Not Set"}
                </p>
                <p>
                  <strong>Age:</strong> {appointment.age || "Not Set"}
                </p>
                <p>
                  <strong>Gender:</strong> {appointment.gender || "Not Set"}
                </p>
                <p>
                  <strong>Reason:</strong> {appointment.reason || "Not Set"}
                </p>
                <p>
                  <strong>Department:</strong>{" "}
                  {appointment.description || "Not Set"}
                </p>
                <p>
                  <strong>Date:</strong> {appointment.pickDate || "Not Set"}
                </p>
                <p>
                  <strong>Time:</strong> {appointment.pickTime || "Not Set"}
                </p>
                <p>
                  <strong>Status:</strong>
                  <span>{appointment.status || "Not Set"}</span>
                </p>
                <p>
                  <strong>Message:</strong> {appointment.message || "Not Set"}
                </p>
              </div>

              <div className="flex gap-3 mt-5">
                <button
                  className="px-5 py-2 rounded-lg font-medium shadow-md bg-yellow-500 text-white hover:bg-yellow-600 transition duration-200"
                  onClick={() => handelButton(index, "Pending")}
                >
                  Pending
                </button>
                <button
                  className="px-5 py-2 rounded-lg font-medium shadow-md bg-green-500 text-white hover:bg-green-600 transition duration-200"
                  onClick={() => handelButton(index, "Confirmed")}
                >
                  Confirmed
                </button>
                <button
                  className="px-5 py-2 rounded-lg font-medium shadow-md bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
                  onClick={() => handelButton(index, "Completed")}
                >
                  Completed
                </button>
              </div>

              <div className="mt-5 flex gap-3">
                <input
                  type="text"
                  placeholder="Write a message..."
                  value={messages[index] || ""}
                  onChange={(e) => handleMessageChange(index, e)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  className="px-5 py-2 rounded-lg font-medium shadow-md bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
                  onClick={() => saveMessage(index)}
                >
                  Save
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-xl text-center mt-10">
          No appointments found with that name or status.
        </p>
      )}
    </div>
  );
};

export default Doctor;
