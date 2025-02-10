import { useState, useEffect } from "react";
import useLocalStorage from "./local-storage.hook";
import { User } from "../types";

const UserAuthentication = () => {
  const [users, setUsers] = useLocalStorage<User[]>("users", []);
  const [loggedInUser, setLoggedInUser] = useLocalStorage<User | null>("loggedInUser", null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleAuthentication = (data: User, isSignup: boolean) => {
    const existingUser = users.find(user => user.email === data.email);
    
    if (isSignup) {
      if (existingUser) {
        alert("User already exists! Please log in.");
        return;
      }
      setUsers([...users, data]);
      setLoggedInUser(data);
    } else {
      if (!existingUser || existingUser.password !== data.password) {
        alert("Invalid email or password!");
        return;
      }
      setLoggedInUser(existingUser);
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return { loggedInUser, isLoading, handleAuthentication, handleLogout };
};

export default UserAuthentication;
