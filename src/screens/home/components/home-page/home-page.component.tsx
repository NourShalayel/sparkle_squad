import docImage from "../../../../assets/doctorImg.png";
import "./home-page.css";
const HomePage = () => {
  return (
    <section className="bg-gradient-to-r from-[#71b5fa] via-[#B6F8FF] to-[#82D3FF] ">
      <div className="wrapper px-4 md:px-6 flex flex-col md:flex-row justify-center items-center gap-18">
        <div className="text-center md:text-left max-w-2xl ">
          <h2 className="text-mainText  text-3xl md:text-4xl lg:text-6xl my-6">
            Providing the best online medical consultant.
          </h2>
          <p className="text-sky-700 mb-14">
            We are committed to providing you with the best medical and
         healthcare services to help you
            live healthier and happier.
          </p>
        </div>
        <div className="flex justify-center md:justify-end mt-3">
          <img src={docImage} alt="Doctor" />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
