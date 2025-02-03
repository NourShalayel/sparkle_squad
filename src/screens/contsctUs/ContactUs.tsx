import React from "react";
import doctorImg from "../../assets/contactUs-bg.png";
import ContactForm from "./ContactForm";
const ContactUs = () => {
  return (
    <>
      <section className="bg-[linear-gradient(25deg,#77BAFB_20%,#B3F4FE_60%,#84D4FF_90%)] pt-14">
        <div className="flex flex-col md:flex-row justify-center items-center container mx-auto px-6 gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-mainText font-bold text-3xl md:text-6xl">
              Contact US
            </h2>
            <p className="text-sky-700 mt-4">
              Kindly reach us to get the fastest response and treatment
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src={doctorImg}
              alt="Doctor illustration"
              className="w-full max-w-sm mx-auto"
            />
          </div>
        </div>
      </section>
      <div className="relative -mt-16">
      <ContactForm />
      </div>
    </>
  );
};

export default ContactUs;
