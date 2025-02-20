import { IAppointment } from "../../types/type";

interface DialogProps {
  appointment: IAppointment;
  onSubmitForm: () => void;
  onClose: () => void;
}

const Dialog = ({ appointment, onSubmitForm, onClose }: DialogProps) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-65">
    <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-3xl mx-auto p-6 md:p-10">
      <h3 className="font-extrabold text-3xl md:text-4xl text-center text-gray-800 mb-10">
        Confirm Your Appointment
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
        <div className="space-y-4 text-center">
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-semibold text-2xl">{appointment.userName}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-semibold text-2xl">{appointment.patientPhone}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-500">Gender</p>
            <p className="font-semibold text-2xl">{appointment.gender}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-500">Age</p>
            <p className="font-semibold text-2xl">{appointment.age}</p>
          </div>
        </div>
        <div className="space-y-4 text-center">
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-500">Reason</p>
            <p className="font-semibold text-2xl">{appointment.reason}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-500">Description</p>
            <p className="font-semibold text-2xl">{appointment.description}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-500">Date</p>
            <p className="font-semibold text-2xl">{appointment.pickDate}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-500">Time</p>
            <p className="font-semibold text-2xl ">{appointment.pickTime}</p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
        <button
          onClick={onSubmitForm}
          className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-3 px-6 rounded-lg transition-all"
        >
          Confirm
        </button>
        <button
          onClick={handleClose}
          className="bg-red-500 hover:bg-red-600 text-white font-bold text-lg py-3 px-6 rounded-lg transition-all"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default Dialog;