import { Clock, Phone, MapPin, Envelope } from "@phosphor-icons/react";

const ContactUs = () => {
  return (
    <div className="mt-5 wrapper">
      <h2 className="text-mainText font-bold text-3xl md:text-4xl text-center mb-6">
        Contact Info
      </h2>
      <p className="mb-12 text-gray-600 text-center text-sm md:text-base max-w-2xl mx-auto">
        Getting an accurate diagnosis can be one of the most impactful experiences you can have — 
        especially if you've been in search of that answer for a while. We can help you get more.
      </p>
      <div className="mb-12 bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h6 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">🕒 Opening Hours</h6>
        <div className="flex justify-between text-gray-600 border-b pb-3">
          <span>Mon - Fri</span>
          <span className="flex justify-center gap-2">
            <Clock size={22} className="text-blue-500" />
            <p>6am - 10pm</p>
          </span>
        </div>
        <div className="flex justify-between text-gray-600 pt-6">
          <span>Sat - Sun</span>
          <span className="flex justify-center  gap-2">
            <Clock size={22} className="text-blue-500" />
            <p>8am - 8pm</p>
          </span>
        </div>
      </div>
      <h6 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8 text-center">
        🌍 Visit Us
      </h6>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <div className=" p-6 md:p-8 ">
          <h6 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">🇺🇸 USA Branch</h6>
          <div className="flex items-start gap-3 mb-4">
            <MapPin size={28} className="text-blue-500 flex-shrink-0" />
            <p className="text-gray-600">123 Health St, Wellness City, CA 90001</p>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Phone size={22} className="text-blue-500 flex-shrink-0" />
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="flex items-center gap-3">
            <Envelope size={22} className="text-blue-500 flex-shrink-0" />
            <p className="text-gray-600">contact@fakeclinic.com</p>
          </div>
        </div>
        <div className=" p-6 md:p-8 ">
          <h6 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">🇬🇧 UK Branch</h6>
          <div className="flex items-start gap-3 mb-4">
            <MapPin size={28} className="text-blue-500 flex-shrink-0" />
            <p className="text-gray-600">45 London Road, Medcare Center, London, UK</p>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Phone size={22} className="text-blue-500 flex-shrink-0" />
            <p className="text-gray-600">+44 (20) 9876-5432</p>
          </div>
          <div className="flex items-center gap-3">
            <Envelope size={22} className="text-blue-500 flex-shrink-0" />
            <p className="text-gray-600">contact@ukclinic.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;