import { useState } from "react";
import { Divider, Empty, Typography } from "antd";
import { CalendarBlank, Phone, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { IAppointment } from "../../types/type";
import Footer from "../../components/footer/footer.component";
import male from "../../assets/male.jpg";
import female from "../../assets/female.jpg";
const PatientDashboard = () => {
  const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser") || "null"
  );
  const [appointments, setAppointments] = useState<IAppointment[]>(
    JSON.parse(localStorage.getItem("Appointment-Info") || "[]")
  );

  const userAppointment = appointments.filter(
    (appointment) => appointment.id === loggedInUser.id
  );

  const handleCancel = (index: number) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    localStorage.setItem(
      "Appointment-Info",
      JSON.stringify(updatedAppointments)
    );
    setAppointments(updatedAppointments);
  };

  return (
    <>
      <div className="wrapper">
        {loggedInUser && appointments && (
          <div className="bg-white shadow-lg rounded-lg mx-auto mt-6 max-w-2xl hover:shadow-xl transition-shadow duration-300 p-6 md:p-8">
            <div className="flex justify-center">
              <div className="rounded-full w-32 h-32 overflow-hidden shadow-md border-4 border-primary">
                {loggedInUser.gender === "male" ? (
                  <img
                    src={male}
                    alt="User Avatar"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <img
                    src={female}
                    alt="User Avatar"
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
            </div>
            <div className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center gap-2 text-gray-500">
                    <User size={20} color="#888" weight="fill" />
                    <span className="text-sm uppercase">Name</span>
                  </div>
                  <Divider className="my-2" />
                  <p className="text-lg text-gray-700 font-medium mt-1 capitalize">
                    {loggedInUser.fullName}
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
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
          <div className="my-16 wrapper">
            <div className="grid grid-cols-1 gap-6 sm:hidden">
              {/* Stacked Layout for Small Screens */}
              {userAppointment.map((appointment, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="space-y-3">
                    <p>
                      <strong>Name:</strong> {appointment.userName}
                    </p>
                    <p>
                      <strong>Gender:</strong> {appointment.gender}
                    </p>
                    <p>
                      <strong>Age:</strong> {appointment.age}
                    </p>
                    <p>
                      <strong>Doctor Name:</strong> {appointment.doctorName}
                    </p>
                    <p>
                      <strong>Appointment Date:</strong> {appointment.pickDate}
                    </p>
                    <p>
                      <strong>Appointment Time:</strong> {appointment.pickTime}
                    </p>
                    <button
                      onClick={() => handleCancel(index)}
                      className="btn btn-active bg-red-700 text-white hover:bg-white hover:text-red-700 hover:border hover:border-red-700 w-full mt-4"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Table Layout for Larger Screens */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="table w-full text-center ">
                <thead>
                  <tr className="text-2xl">
                    <th>#</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Doctor Name</th>
                    <th>Appointment Date</th>
                    <th>Appointment Time</th>
                    <th>Cancel</th>
                  </tr>
                </thead>
                <tbody>
                  {userAppointment.map((appointment, index) => (
                    <tr key={index} className="hover:bg-gray-50 text-xl ">
                      <th>{index + 1}</th>
                      <td>{appointment.userName}</td>
                      <td>{appointment.gender}</td>
                      <td>{appointment.age}</td>
                      <td>{appointment.doctorName}</td>
                      <td>{appointment.pickDate}</td>
                      <td>{appointment.pickTime}</td>
                      <td>
                        <button
                          onClick={() => handleCancel(index)}
                          className="btn btn-active bg-red-700 text-white hover:bg-white hover:text-red-700 hover:border hover:border-red-700"
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="flex my-16">
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
      <Footer />
    </>
  );
};

export default PatientDashboard;
