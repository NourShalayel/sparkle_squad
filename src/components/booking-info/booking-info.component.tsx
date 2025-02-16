import { Link } from "react-router-dom";
import { bookingItems } from "../../data/data";
import "./booking-info.css";

const BookingInfo = () => {
  return (
    <div className="booking-container">
      {bookingItems.map((item) => (
        <div key={item.id} className="booking-item">
          <div className="icon">{item.icon}</div>
          <div>
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}

      <button className="book-now"><Link to="/appointment">Book Now</Link></button>
    </div>
  );
};

export default BookingInfo;
