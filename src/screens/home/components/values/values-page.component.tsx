import { valuesData } from '../../../../data/data';
import './values.css';

const Values = () => {
  return (
    <div className="values">
      <h2 className="values-title">Our Core Values</h2>
      <p className="values-subtitle">Guiding Principles That Define Us</p>
      <div className="values-container">
        {valuesData.map((value) => (
          <div key={value.id} className="value-card">
            <div className="value-header">
              <span className="value-icon">
                <img src={value.image} alt={value.title} />
              </span>
              <h3>{value.title}</h3>
            </div>
            <p className="value-description">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;