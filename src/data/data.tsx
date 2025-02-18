import {
  FaHeart,
  FaBell,
  FaChild,
  FaBrain,
  FaSnowflake,
  FaHandsHelping,
} from "react-icons/fa";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import trustImage from "../assets/Trust.png";
import respectImage from "../assets/Onboarding.png";
import handImage from "../assets/Handshake.png";

export const departments = [
  { id: 1, name: "Emergency Department", icon: <FaBell /> },
  { id: 2, name: "Cardiology Department", icon: <FaHeart /> },
  { id: 3, name: "Therapy Department", icon: <FaHandsHelping /> },
  { id: 4, name: "Pediatric Department", icon: <FaChild /> },
  { id: 5, name: "Psychiatry Department", icon: <FaBrain /> },
  { id: 6, name: "Psychiatry Department", icon: <FaSnowflake /> },
];

export const bookingItems = [
  { id: 1, icon: <EditCalendarIcon />, title: "Date" },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faStethoscope} />,
    title: "Specialization",
  },
  { id: 3, icon: <AddLocationAltIcon />, title: "Location" },
];

export const valuesData = [
  {
    id: 1,
    image: trustImage,
    title: "Compassion",
    description:
      "We believe in treating every patient with kindness and empathy, listening to their concerns, and supporting them through each step of their journey.",
  },
  {
    id: 2,
    image: handImage,
    title: "Integrity",
    description:
      "Honesty, transparency, and accountability are at the core of our actions, creating an environment of trust where patients and families can have confidence in our care.",
  },
  {
    id: 3,
    image: respectImage,
    title: "Respect",
    description:
      "Respect is at the heart of our interactions, fostering an inclusive, supportive environment where everyone is treated with courtesy and understanding.",
  },
  {
    id: 4,
    image: respectImage,
    title: "Teamwork",
    description:
      "We are committed to providing you with the best medical and healthcare services to help you live healthier and happier.",
  },
];

export const doctors = [
  {
    id: 1,
    name: "Dr. Ahmed Ali",
    specialty: "Cardiologist",
    image: "/img/1.jpg",
  },
  {
    id: 2,
    name: "Dr. John Smith",
    specialty: "Neurologist",
    image: "/img/2.jpg",
  },
  {
    id: 3,
    name: "Dr. Sara Ahmed",
    specialty: "Dermatologist",
    image: "/img/3.webp",
  },
  {
    id: 4,
    name: "Dr. Emily White",
    specialty: "Orthopedic",
    image: "/img/4.avif",
  },
  {
    id: 5,
    name: "Dr. Olivia Green",
    specialty: "Psychiatrist",
    image: "/img/5.jpg",
  },
  {
    id: 6,
    name: "Dr. Ali Ahmed",
    specialty: "Pediatrician",
    image: "/img/6.webp",
  },
  {
    id: 7,
    name: "Dr. Noor Hassan",
    specialty: "Cardiologist",
    image: "/img/7.jpg",
  },
  {
    id: 8,
    name: "Dr. Khaled Omar",
    specialty: "Neurologist",
    image: "/img/8.jpg",
  },
  {
    id: 9,
    name: "Dr. Layla Karim",
    specialty: "Dermatologist",
    image: "/img/9.jpg",
  },
  {
    id: 10,
    name: "Dr. Hana Ibrahim",
    specialty: "Orthopedic",
    image: "/img/10.jpg",
  },
  {
    id: 11,
    name: "Dr. Ola Green",
    specialty: "Psychiatrist",
    image: "/img/11.jpg",
  },
  {
    id: 12,
    name: "Dr. Omar Fathi",
    specialty: "Pediatrician",
    image: "/img/12.webp",
  },
];
