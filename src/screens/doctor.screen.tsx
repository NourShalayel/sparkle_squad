import { useLocation, useParams } from "react-router-dom";
import { IDoctors } from "../types";





const Doctor = () =>{
    const location = useLocation();
    const doctors = location.state; // استلام بيانات الطبيب

    if (!doctors) return <p className="text-red-500">No doctor data available</p>;

    return (
        
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <img src={doctors.image} alt={doctors.name} className="w-48 h-48 object-cover rounded-full mb-4"/>
            <h2 className="text-2xl font-bold">{doctors.name}</h2>
            <p className="text-gray-600">{doctors.specialty}</p>
        </div>
        )
}
export default Doctor ;