import './values.css';
import trustImage from '../../assets/Trust.png';
import respectImage from '../../assets/Onboarding.png';
import handImage from '../../assets/Handshake.png';

const valuesData = [
  {
    id: 1,
    image: trustImage,
    title: "Compassion",
    description: "We believe in treating every patient with kindness and empathy, listening to their concerns, and supporting them through each step of their journey."
  },
  {
    id: 2,
    image: handImage,
    title: "Integrity",
    description: "Honesty, transparency, and accountability are at the core of our actions, creating an environment of trust where patients and families can have confidence in our care."
  },
  {
    id: 3,
    image: respectImage,
    title: "Respect",
    description: "Respect is at the heart of our interactions, fostering an inclusive, supportive environment where everyone is treated with courtesy and understanding."
  },
  {
    id: 4,
    image: respectImage,
    title: "Teamwork",
    description: "We are committed to providing you with the best medical and healthcare services to help you live healthier and happier."
  }
];

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
