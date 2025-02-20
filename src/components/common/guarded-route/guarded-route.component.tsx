import React, { useState } from "react";
import './guarded-route.css';
import { UserRole } from "../../../types/type";
import UserAuthentication from "../../../hooks/user-authentication.hook";
import { Navigate, useNavigate } from "react-router-dom";

interface Iprops {
    children: React.ReactNode;
    roles: UserRole[];
}
const Guarded = (props: Iprops) => {
    const { loggedInUser } = UserAuthentication();
    const [showMessage, setShowMessage] = useState(false);
    const navigate = useNavigate();
    
    if(!loggedInUser){
        return <Navigate to="/login"/>
    }
    else if(!loggedInUser.role || !props.roles.includes(loggedInUser.role)){
        if(!showMessage){
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
                navigate("/");
            }, 2000)
        }
        return <div className="permission m-auto">🚫 You don't have permission to access this page.</div>;
    }

    return <>{props.children}</>
}

export default Guarded;