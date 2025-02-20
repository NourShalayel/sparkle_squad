import { useState, useEffect } from "react";
import { IAppointment } from "../../types/type";
import { useLocation } from "react-router-dom";
import useLocalStorage from "../../hooks/local-storage.hook";
import NotesDialog from "../../components/dialog/NotesDialog";
import { Pagination } from "antd";
import { useMediaQuery } from "react-responsive";

const AppointmentDetails = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const location = useLocation();
  const doctors = location.state;
  const [appointment, setAppointment] = useLocalStorage<IAppointment[]>(
    "Appointment-Info",
    []
  );
  const [name, setName] = useState<string>("");
  const [messages, setMessages] = useState<{ [key: number]: string }>({});
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedAppointmentIndex, setSelectedAppointmentIndex] = useState<
    number | null
  >(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const indexOfLastRow = currentPage * pageSize;
  const indexOfFirstRow = indexOfLastRow - pageSize;
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

  const filteredAppointments = appointment
    .filter((appointment) => appointment.doctorId === doctors.id)
    .filter(
      (appointment) =>
        appointment.userName &&
      appointment.userName.toLowerCase().includes(name.toLowerCase())
    );
    const paginatedAppointments  = filteredAppointments.slice(
      indexOfFirstRow,
      indexOfLastRow
    );

  const sortedAppointments = filteredAppointments.sort((a, b) => {
    const dateA = new Date(a.pickDate);
    const dateB = new Date(b.pickDate);
    return dateB.getTime() - dateA.getTime();
  });

  const handelButton = (pickDate: string, pickTime: string, status: string) => {
    setAppointment((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.pickDate === pickDate && appointment.pickTime === pickTime
          ? { ...appointment, status }
          : appointment
      )
    );
  };

  const openNoteDialog = (index: number) => {
    setSelectedAppointmentIndex(index);
    setIsDialogOpen(true);
  };

  const saveNote = (message: string) => {
    if (selectedAppointmentIndex !== null) {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [selectedAppointmentIndex]: message,
      }));
      setIsDialogOpen(false);
    }
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
    <div className="flex flex-col space-y-6 p-6  min-h-screen items-center mt-32">
      <div
        key={doctors.id}
        className="bg-white p-6 rounded-lg shadow-lg flex justify-center items-center gap-6"
      >
        <img
          src={doctors.image}
          alt={doctors.name}
          className="w-44 h-40 object-cover rounded-full border-4 border-blue-400 shadow-md"
        />
        <div>
          <h2 className="text-xl font-bold text-blue-800">{doctors.name}</h2>
          <p className="text-gray-600 italic">{doctors.specialty}</p>
          <p className="text-gray-500">{doctors.clinicAddress}</p>
        </div>
      </div>
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between  gap-4">
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
      {/* Appointments Table */}
      <h3 className="text-mainText font-medium text-xl md:text-2xl lg:text-4xl	text-center p-4 mt-16">
        Appointment Details
      </h3>
      <div className="overflow-x-auto max-w-7xl">
        {isMobile ? (
          // Stacked Layout for Mobile
          <div className="space-y-4">
            {paginatedAppointments.map((appointment, index) => (
              <div
                key={appointment.id || index}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
              >
                <div className="space-y-2">
                  <p>
                    <strong>Name:</strong> {appointment.userName || "Not Set"}
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
                    {appointment.patientPhone || "Not Set"}
                  </p>
                  <p>
                    <strong>Gender:</strong> {appointment.gender || "Not Set"}
                  </p>
                  <p>
                    <strong>Age:</strong> {appointment.age || "Not Set"}
                  </p>
                  <p>
                    <strong>Visit Reason:</strong>{" "}
                    {appointment.reason || "Not Set"}
                  </p>
                  <p>
                    <strong>Description:</strong>{" "}
                    {appointment.description || "Not Set"}
                  </p>
                  <p>
                    <strong>Appointment Date:</strong>{" "}
                    {appointment.pickDate || "Not Set"}
                  </p>
                  <p>
                    <strong>Appointment Time:</strong>{" "}
                    {appointment.pickTime || "Not Set"}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <select
                      value={appointment.status || "Not Set"}
                      onChange={(e) =>
                        handelButton(
                          appointment.pickDate,
                          appointment.pickTime,
                          e.target.value
                        )
                      }
                      className={`px-3 py-1 rounded-full text-sm font-medium text-center ${
                        appointment.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                          : appointment.status === "Confirmed"
                          ? "bg-green-100 text-green-800 hover:bg-green-200"
                          : appointment.status === "Completed"
                          ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      } focus:outline-none appearance-none`}
                    >
                      <option value="Pending" className="bg-white text-black">
                        Pending
                      </option>
                      <option value="Confirmed" className="bg-white text-black">
                        Confirmed
                      </option>
                      <option value="Completed" className="bg-white text-black">
                        Completed
                      </option>
                    </select>
                  </p>
                  <button
                    className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-full transition duration-200"
                    onClick={() => openNoteDialog(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <table className="table-auto border-collapse  text-center text-sm w-full">
            <thead>
              <tr className="bg-blue-100 border-b text-center text-xl">
                <th className="p-3">Name</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Gender</th>
                <th className="p-3">Age</th>
                <th className="p-3">Visit Reason</th>
                <th className="p-3">Description</th>
                <th className="p-3">Appointment Date</th>
                <th className="p-3">Appointment Time</th>
                <th className="p-3">Status</th>
                <th className="p-3">Notes</th>
              </tr>
            </thead>
            <tbody className="">
              {filteredByStatus.length > 0 ? (
                paginatedAppointments.map((appointment, index) => (
                  <tr
                    key={appointment.id || index}
                    className="border-b text-center text-xl hover:bg-blue-50 transition duration-200"
                  >
                    <td className="p-3">{appointment.userName || "Not Set"}</td>
                    <td className="p-3">
                      {appointment.patientPhone || "Not Set"}
                    </td>
                    <td className="p-3">{appointment.gender || "Not Set"}</td>
                    <td className="p-3">{appointment.age || "Not Set"}</td>
                    <td className="p-3">{appointment.reason || "Not Set"}</td>
                    <td className="p-3">
                      {appointment.description || "Not Set"}
                    </td>
                    <td className="p-3">{appointment.pickDate || "Not Set"}</td>
                    <td className="p-3">{appointment.pickTime || "Not Set"}</td>
                    <td className="">
                      <select
                        value={appointment.status || "Not Set"}
                        onChange={(e) =>
                          handelButton(
                            appointment.pickDate,
                            appointment.pickTime,
                            e.target.value
                          )
                        }
                        className={`px-3 py-1 rounded-full text-sm font-medium text-center  ${
                          appointment.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                            : appointment.status === "Confirmed"
                            ? "bg-green-100 text-green-800 hover:bg-green-200"
                            : appointment.status === "Completed"
                            ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        } focus:outline-none appearance-none`}
                      >
                        <option value="Pending" className="bg-white text-black">
                          Pending
                        </option>
                        <option
                          value="Confirmed"
                          className="bg-white text-black"
                        >
                          Confirmed
                        </option>
                        <option
                          value="Completed"
                          className="bg-white text-black"
                        >
                          Completed
                        </option>
                      </select>
                    </td>
                    <td className="p-3">
                      <button
                        className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-full transition duration-200"
                        onClick={() => openNoteDialog(index)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="p-5 text-center text-gray-500">
                    No appointments found with that Doctor.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
      <div className="flex justify-center mt-6">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredAppointments.length}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>
      <NotesDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={saveNote}
        initialMessage={messages[selectedAppointmentIndex ?? 0] || ""}
      />
    </div>
  );
};

export default AppointmentDetails;
