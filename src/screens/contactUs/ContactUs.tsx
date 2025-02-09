import { Clock, Phone, MapPin, Envelope } from "@phosphor-icons/react";

const ContactUs = () => {
  return (
    <div className="mt-16">
      {/* Section Title */}
      <h2 className="text-mainText font-bold text-3xl text-center mb-6">
         Contact Info
      </h2>

      {/* Description */}
      <p className="mb-8 text-gray-600 text-center text-sm mx-auto wrapper">
        Getting an accurate diagnosis can be one of the most impactful experiences you can have — 
        especially if you've been in search of that answer for a while. We can help you get more.
      </p>

      {/* Opening Hours Section */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-sm wrapper">
        <h6 className="text-lg font-semibold text-gray-700 mb-4">🕒 Opening Hours</h6>
        <div className="flex justify-between text-gray-600 border-b pb-2 ">
          <span>Mon - Fri</span>
          <span className="flex items-center gap-2">
            <Clock size={22} className="text-blue-500" />
            <p>6am - 10pm</p>
          </span>
        </div>
        <div className="flex justify-between text-gray-600 pt-2 ">
          <span>Sat - Sun</span>
          <span className="flex items-center gap-2">
            <Clock size={22} className="text-blue-500" />
            <p>8am - 8pm</p>
          </span>
        </div>
      </div>

      {/* Contact Information Section */}
      <h6 className="text-2xl font-semibold text-gray-700 mb-4 text-center">🌍 Visit Us</h6>

      <div className="grid md:grid-cols-2 gap-10 wrapper">
        {/* USA Branch */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h6 className="text-xl font-bold text-gray-800 mb-3">🇺🇸 USA Branch</h6>
          <div className="flex gap-3 mb-3">
            <MapPin size={30} className="text-blue-500" />
            <p>123 Health St, Wellness City, CA 90001</p>
          </div>
          <div className="flex gap-3 mb-3">
            <Phone size={22} className="text-blue-500" />
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="flex gap-3">
            <Envelope size={22} className="text-blue-500" />
            <p>contact@fakeclinic.com</p>
          </div>
        </div>

        {/* UK Branch */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h6 className="text-xl font-bold text-gray-800 mb-3">🇬🇧 UK Branch</h6>
          <div className="flex gap-3 mb-3">
            <MapPin size={30} className="text-blue-500" />
            <p>45 London Road, Medcare Center, London, UK</p>
          </div>
          <div className="flex gap-3 mb-3">
            <Phone size={22} className="text-blue-500" />
            <p>+44 (20) 9876-5432</p>
          </div>
          <div className="flex gap-3">
            <Envelope size={22} className="text-blue-500" />
            <p>contact@ukclinic.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
