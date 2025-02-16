import { createContext } from "react";
import { IAppointment } from "../types/type";
import useLocalStorage from "../hooks/local-storage.hook";

interface IStateContext {
  appointments: IAppointment[];
  setAppointments: React.Dispatch<React.SetStateAction<IAppointment[]>>;
}
interface IProps {
  children: React.ReactNode;
}

export const AppointmentsContext = createContext<IStateContext | null>(null);

export const AppointmentsProvider = (props: IProps) => {
  const [appointments, setAppointments] = useLocalStorage<IAppointment[]>(
    "Appointment-Info",
    []
  );

  return (
    <AppointmentsContext.Provider value={{ appointments, setAppointments }}>
      {props.children}
    </AppointmentsContext.Provider>
  );
};
