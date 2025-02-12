import { valuesData } from '../../data/data';
import './values.css';

const Values = () => {
  return (
    <div className="values">
      <h2 className="values-title">Our Values</h2>
      <div className="values-container">
        {valuesData.map((value) => (
          <div key={value.id} className="value-card">
            <div className="value-header">
              <span>
                <img src={value.image} alt={value.title} />
              </span>
              {value.title}
            </div>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
