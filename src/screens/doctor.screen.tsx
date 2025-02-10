import { useLocation, useParams } from "react-router-dom";
import { IDoctors } from "../types";





const Doctor = () =>{
    const location = useLocation();
    const doctors = location.state; // استلام بيانات الطبيب

    if (!doctors) return <p className="text-red-500">No doctor data available</p>;

    return (
        <div className="flex flex-col space-y-6 p-6 bg-gray-100 min-h-screen items-center">
        {/* Doctor Card */}
        <div className="flex items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
          <img src={doctor.image} alt={doctor.name} className="w-24 h-24 object-cover rounded-full mr-6" />
          <div>
            <h2 className="text-xl font-bold">{doctor.name}</h2>
            <p className="text-gray-600">{doctor.specialty}</p>
          </div>
        </div>
  
        {/* Search & Filter */}
        <div className="flex space-x-4 w-full max-w-xl">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select className="p-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
          </select>
        </div>
      </div>
    )
  }

export default Doctor ;