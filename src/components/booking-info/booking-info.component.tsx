import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./booking-info.css";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";

const bookingItems = [
  { id: 1, icon: <EditCalendarIcon />, title: "Date" },
  { id: 2, icon: <FontAwesomeIcon icon={faStethoscope} />, title: "Specialization" },
  { id: 3, icon: <AddLocationAltIcon />, title: "Location" }
];

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

      <button className="book-now">Book Now</button>
    </div>
  );
};

export default BookingInfo;
