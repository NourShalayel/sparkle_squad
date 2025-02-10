import "./Department.css";
import { FaHeart, FaBell, FaChild, FaBrain, FaSnowflake, FaHandsHelping } from "react-icons/fa";

const departments = [
  { id: 1, name: "Emergency Department", icon: <FaBell /> },
  { id: 2, name: "Cardiology Department", icon: <FaHeart /> },
  { id: 3, name: "Therapy Department", icon: <FaHandsHelping /> },
  { id: 4, name: "Pediatric Department", icon: <FaChild /> },
  { id: 5, name: "Psychiatry Department", icon: <FaBrain /> },
  { id: 6, name: "Psychiatry Department", icon: <FaSnowflake /> }
];

const Department = () => {
  return (
    <div className="department-container">
      <div className="department-header">
        <h2>Department</h2>
      </div>

      <div className="department-list">
        {departments.map((dept) => (
          <div key={dept.id} className="department-item">
            <div className="icon">{dept.icon}</div>
            <p>{dept.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Department;
