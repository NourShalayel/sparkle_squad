import { useNavigate } from "react-router-dom";
import notFoundImg from '../../assets/404.png'
const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBackHome = () => {
    navigate("/"); 
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-50 px-6">
      {/* Left Section - Image */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={notFoundImg}
          alt="Illustration of a patient"
          className="w-3/4"
        />
      </div>
      {/* Right Section - Text and Button */}
      <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0 lg:ml-12">
        <h1 className="text-[200px] font-bold text-blue-700 mb-4">404</h1>
        <h2 className="text-4xl font-semibold text-gray-800">
          Oops! Page Not Found
        </h2>
        <p className="mt-4 text-gray-600">
          Ethics are integral to medical practice, guiding decisions regarding
          high patient care, confidentiality, consent, and end-of-life care.
        </p>
        <button
          onClick={handleGoBackHome}
          className="mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition duration-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
