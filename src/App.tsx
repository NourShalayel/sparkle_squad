import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import LandingHomePage from './components/home-landing-page';
import Register from './components/login/login.components';
import StatusBar from './components/status-bar/status-bar.component';
import useLocalStorage from './hooks/local-storage.hook';
import { User } from './types';
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useLocalStorage<User[]>("users", []);
  const [loggedInUser, setLoggedInUser] = useLocalStorage<User | null>("loggedInUser", null);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    setIsLoading(false); 
  }, []);

  const handleAuth = (data: User, isSignup: boolean) => {
      const existingUser = users.find(user => user.email === data.email);
      if (isSignup) {
        if (existingUser) {
            alert("User already exists! Please log in.");
            return;
        }
        const newUser = data;
        setUsers([...users, newUser]);
        setLoggedInUser(newUser);
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

  return (
    <Router>
      {loggedInUser && <StatusBar handleLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={loggedInUser ? <LandingHomePage /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={loggedInUser ? <Navigate to="/" replace /> : <Register onSubmit={handleAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
