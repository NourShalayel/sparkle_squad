import { useState } from "react";
import { Divider, Empty, Typography } from "antd";
import { CalendarBlank, Envelope, Phone } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { IAppointment } from "../../types/type";

const PatientDashboard = () => {
  const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser") || "null"
  );
  const [appointments, setAppointments] = useState<IAppointment[]>(
    JSON.parse(localStorage.getItem("Appointment-Info") || "[]")
  );

  const userAppointment = appointments.filter(
    (appointment) => appointment.userId === loggedInUser.id
  );

  const handleCancel = (index: number) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    localStorage.setItem("Appointment-Info", JSON.stringify(updatedAppointments));
    setAppointments(updatedAppointments);
  };

  return (
    <div className="wrapper">
      {/* User Info Section */}
      {loggedInUser && appointments && (
        <div className="bg-white shadow-lg rounded-lg mx-auto mt-6 max-w-2xl hover:shadow-xl transition-shadow duration-300 items-center flex p-2">
          <div className="avatar flex justify-center mt-6">
            <div className="rounded-full w-32 h-32 overflow-hidden shadow-md border-4 border-primary">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="User Avatar"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="card-body p-6">
            <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6 capitalize">
              {loggedInUser.fullName}
            </h2>
            <div className="flex justify-center gap-16 flex-wrap">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-2 text-gray-500">
                  <Envelope size={20} color="#888" weight="fill" />
                  <span className="text-sm uppercase">Email</span>
                </div>
                <Divider className="my-2" />
                <p className="text-lg text-gray-700 font-medium mt-1">
                  {loggedInUser.email}
                </p>
              </div>
              <div className="flex flex-col items-start text-center">
                <div className="flex items-center gap-2 text-gray-500">
                  <Phone size={20} color="#888" weight="fill" />
                  <span className="text-sm uppercase">Phone</span>
                </div>
                <Divider className="my-2" />
                <p className="text-lg text-gray-700 font-medium mt-1">
                  {loggedInUser.phone}
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-2 text-gray-500">
                  <CalendarBlank size={20} color="#888" weight="fill" />
                  <span className="text-sm uppercase">Age</span>
                </div>
                <Divider className="my-2" />
                <p className="text-lg text-gray-700 font-medium mt-1">
                  {appointments[0]?.age || "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Appointment Details */}
      {userAppointment.length > 0 ? (
        <div className="overflow-x-auto mt-16">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
                <th>Cancel Appointment</th>
              </tr>
            </thead>
            <tbody>
              {userAppointment.map((appointment, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{appointment.userName}</td>
                  <td>{appointment.gender}</td>
                  <td>{appointment.age}</td>
                  <td>{appointment.pickDate}</td>
                  <td>{appointment.pickTime}</td>
                  <td>
                    <button
                      onClick={() => handleCancel(index)}
                      className="btn btn-active bg-red-700 text-white hover:bg-white hover:text-red-700 hover:border hover:border-red-700 w-1/3"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex mt-10">
          <Empty
            className="m-auto"
            styles={{ image: { height: 260 } }}
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            description={
              <Typography.Text>
                <p className="text-gray-600">No appointments found</p>
              </Typography.Text>
            }
          >
            <Link
              to={"/appointment"}
              className="btn btn-active bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600"
            >
              Book now
            </Link>
          </Empty>
        </div>
      )}
    </div>
  );
};

export default PatientDashboard;