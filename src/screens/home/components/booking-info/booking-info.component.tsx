import { Link } from "react-router-dom";
import { bookingItems } from "../../../../data/data";
import "./booking-info.css";

const BookingInfo = () => {
  return (
    <div className="hidden md:flex flex-wrap items-center justify-around gap-6 bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto -mt-12 relative z-10">
  {bookingItems.map((item) => (
    <div key={item.id} className="booking-item flex items-center gap-3">
      <div className="icon bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-xl">
        {item.icon}
      </div>
      <div>
        <h3 className="text-sm md:text-base text-gray-800 font-medium">
          {item.title}
        </h3>
      </div>
    </div>
  ))}
  <Link
    to="/appointment"
    className="book-now bg-blue-900 text-white px-6 py-2 rounded-full text-sm md:text-base font-semibold hover:bg-blue-800 transition-colors"
  >
    Book Now
  </Link>
</div>
  );
};

export default BookingInfo;
