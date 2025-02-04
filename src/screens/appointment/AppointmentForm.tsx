import { ArrowRight } from "@phosphor-icons/react";
import InputField from "../../components/InputField";
import SelectField from "../../components/SelectField";

const AppointmentForm = () => {
  return (
    <section className="wrapper py-10">
      <div className="border rounded-2xl m-auto p-10 ">
        <h2 className="text-center text-mainText font-bold text-4xl">
          Appointment
        </h2>
        <div className="divider"></div>
        <div className="flex flex-col md:flex-row gap-5">
          <InputField label={"Name"} type={"text"} />
          <InputField label={"Phone Number"} type={"text"} />
        </div>
        <InputField label={"Medical Record Number"} type={"text"} />
        <div className="flex flex-col md:flex-row gap-5 mt-4">
          <SelectField label={"Reason for Visit"} />
          <SelectField label={"Department"} />
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-4">
          <InputField label={"Phone Number"} type={"date"} />
          <InputField label={"Phone Number"} type={"time"} />
        </div>
        <div className="flex justify-center md:justify-start">
          <button className="btn mt-10 bg-[#9ee5ff] text-mainText  border-none text-lg shadow-sm shadow-[#6295b1]">
            Submit
            <ArrowRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
