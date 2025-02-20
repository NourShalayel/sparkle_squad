import { Pagination } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { doctors } from "../../data/data";
import { IDoctors } from "../../types/type";
import useLocalStorage from "../../hooks/local-storage.hook";

const Services = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const indexOfLastDoctor = currentPage * pageSize;
  const indexOfFirstDoctor = indexOfLastDoctor - pageSize;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  const [doctorInfo, setDoctorInfo] = useLocalStorage<IDoctors | null>(
    "doctor-info",
    null
  );
  const handleBookAppoint = (doctor: IDoctors) => {
    setDoctorInfo({
      id: doctor.id,
      name: doctor.name,
    });
    console.log(doctorInfo);
  };
  return (
    <div className="bg-white pb-5">
      <div className="  pt-5">
        <h2 className="text-mainText capitalize font-amaranth font-medium text-2xl md:text-2xl lg:text-5xl	text-center pt-6">
          our services
        </h2>
      </div>
      <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
        {currentDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl 
            transition-all duration-300 transform hover:scale-105 text-center
             border  border-cyan-200"
          >
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-52 object-cover rounded-lg  "
              />
            </div>
            <h3 className="text-2xl font-semibold text-cyan-900">
              {doctor.name}
            </h3>
            <p className="text-cyan-700 text-lg mt-2">{doctor.specialty}</p>
            <div className="mt-5 space-y-3">
              <Link
                to="/appointment"
                className="bg-cyan-500 text-white py-2 px-6 w-full rounded-lg hover:bg-cyan-600 
                transition duration-200 shadow-md text-center block"
                onClick={() => handleBookAppoint(doctor)}
              >
                Book an appointment
              </Link>
              <Link
                to={`/services/${doctor.id}`}
                state={doctor}
                className="bg-cyan-600 text-white py-2 px-6 w-full rounded-lg
                 hover:bg-cyan-700 transition duration-200 block text-center shadow-md"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center p-6">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={doctors.length}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default Services;
