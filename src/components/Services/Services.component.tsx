import { Link } from "react-router-dom";


const Services = () => {
    const doctors = [
        { id: 1, name: 'Dr. Ahmed Ali', specialty: 'Cardiologist', image: "../../../src/assets/img/1.jpg" },
        { id: 2, name: 'Dr. John Smith', specialty: 'Neurologist', image: "../../../src/assets/img/2.jpg" },
        { id: 3, name: 'Dr. Sara Ahmed', specialty: 'Dermatologist', image: "../../../src/assets/img/3.webp" },
        { id: 4, name: 'Dr. Emily White', specialty: 'Orthopedic', image: "../../../src/assets/img/4.avif" },
        { id: 5, name: 'Dr. Haya Ali', specialty: 'Psychiatrist', image: "../../../src/assets/img/5.jpg" },
        { id: 6, name: 'Dr. Bahjat Ahmed', specialty: 'Pediatrician', image: "../../../src/assets/img/6.webp" },
        { id: 7, name: 'Dr. Noor Hassan', specialty: 'Cardiologist', image: "../../../src/assets/img/7.jpg" },
        { id: 8, name: 'Dr. Khaled Omar', specialty: 'Neurologist', image: "../../../src/assets/img/8.jpg" },
        { id: 9, name: 'Dr. Sanaa Hasan', specialty: 'Dermatologist', image: "../../../src/assets/img/9.jpg" },
        { id: 10, name: 'Dr. Ali Thabet', specialty: 'Orthopedic', image: "../../../src/assets/img/10.jpg" },
        { id: 11, name: 'Dr. Ola Green', specialty: 'Psychiatrist', image: "../../../src/assets/img/11.jpg" },
        { id: 12, name: 'Dr. Omar Fathy', specialty: 'Pediatrician', image: "../../../src/assets/img/12.webp" },
    ];

    return (
        <div className="bg-cyan-50 min-h-screen">
            <h1 className="w-full h-[20vh] bg-cyan-900 text-center text-cyan-200 text-5xl flex items-center justify-center font-bold shadow-md">
                OUR SERVICE
            </h1>
            <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {doctors.map((doctor) => (
                    <div
                        key={doctor.id}
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 text-center border border-gray-200"
                    >
                        <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-full h-52 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800">{doctor.name}</h3>
                        <p className="text-gray-500 text-lg mt-2">{doctor.specialty}</p>
                        <div className="mt-5 space-y-3">
                           
                            <Link 
                            to="/appointment" 
                            className="bg-cyan-500 text-white py-2 px-6 w-full rounded-lg hover:bg-cyan-600 transition duration-200 shadow-md">
                                 Book an appointment
                            </Link>
                                
                           
                            <Link
                                to={`/services/${doctor.id}`}
                                state={doctor}
                                className="bg-cyan-600 text-white py-2 px-6 w-full rounded-lg hover:bg-cyan-700 transition duration-200 block text-center shadow-md"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;