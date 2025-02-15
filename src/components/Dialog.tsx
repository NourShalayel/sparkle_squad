import { IAppointment } from "../types/type";

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
    <dialog open className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Confirm Your Appointment</h3>
        <p className="py-4">
          <strong>Name:</strong> {appointment.userName} <br />
          <strong>Phone:</strong> {appointment.patientPhone} <br />
          <strong>Gender:</strong> {appointment.gender} <br />
          <strong>Age:</strong> {appointment.age} <br />
          <strong>Reason:</strong> {appointment.reason} <br />
          <strong>Department:</strong> {appointment.department} <br />
          <strong>Date:</strong> {appointment.pickDate} <br />
          <strong>Time:</strong> {appointment.pickTime}
        </p>
        <div className="modal-action">
          <button
            onClick={onSubmitForm}
            className="custom-btn btn bg-green-500 text-white border-none text-lg shadow-sm shadow-[#6295b1]"
          >
            Confirm
          </button>
          <button
            onClick={handleClose}
            className="custom-btn btn  text-mainText border-none text-lg shadow-sm shadow-[#6295b1]"
          >
            Cancel
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Dialog;
