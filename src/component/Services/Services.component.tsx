
import "./Services.css"

const Services = () =>{
    const doctors = [
                    {id: 1, name: 'Dr. Ahmed Ali', specialty:'Cardiologist', image:"/src/img/1.jpg"},
                    {id: 2, name: 'Dr. John Smith', specialty: 'Neurologist', image:"/src/img/2.jpg"},
                    {id: 3, name: 'Dr. Sara Ahmed', specialty:'Dermatologist', image:"/src/img/3.webp"},
                    { id: 4, name:'Dr. Emily White', specialty: 'Orthopedic', image: "/src/img/4.avif" },
                    { id: 5, name: 'Dr. Olivia Green', specialty:  'Psychiatrist', image: "/src/img/5.jpg" },
                    { id: 6, name:'Dr. Ali Ahmed ' , specialty:  'Pediatrician', image: "/src/img/6.webp" },
                    {id: 7, name: 'Dr. Noor Hassan', specialty:'Cardiologist', image:"/src/img/7.jpg"},
                    {id: 8, name: 'Dr. Khaled Omar', specialty: 'Neurologist', image:"/src/img/8.jpg"},
                    {id: 9, name: 'Dr. Layla Karim', specialty:'Dermatologist', image:"/src/img/9.jpg"},
                    { id:10, name:'Dr. Hana Ibrahim', specialty: 'Orthopedic', image: "/src/img/10.jpg" },
                    { id:11, name:'Dr. Ola Green', specialty:  'Psychiatrist', image: "/src/img/11.jpg" },
                    { id:12, name:'Dr. Omar Fathy' , specialty:  'Pediatrician', image: "/src/img/12.webp" },
                    
                ];
    return(
    
    <div className="bg-cyan-100">
      <h1 className="w-full h-[20vh] bg-cyan-900 text-center text-cyan-400 text-5xl flex items-center justify-center mb-10">OUR SERVICE</h1>
         
         <div className="flex justify-center">
         <input  type="text" placeholder="Search..."className="px-4 py-3 w-96 border-2 border-sky-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-700"/>
         </div>
      
      
         <div className="w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {
                doctors.map(doctors =>(<div key={doctors.id} className="bg-white p-4 rounded-2xl shadow-lg shadow-sky-200 transition-shadow duration-300 text-center">
                    <img src={doctors.image} alt="img doctors" className="w-full h-48 object-cover rounded-md mb-4"/>
                    <h3 className="text-xl font-semibold text-gray-800 ">Name : {doctors.name} </h3>
                    <p className="text-gray-600 m-4 ">{doctors.specialty} </p>
                    <button className="bg-sky-300 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">Book an appointment</button>
                </div>))
            }
        </div>
      
    </div>
  
      
    )
}
export default Services;