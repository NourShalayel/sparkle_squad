import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./login.css"; 
import { UserRole } from "../../types/type";
import { loginSchema, signupSchema } from "../../utils/Validation";

interface FormValues {
  fullName?: string;
  email: string;
  phone?: string;
  password: string;
  role?: UserRole;
}

interface RegisterUser {
  onSubmit: (data: FormValues, isSignup: boolean) => void;
}


const Register = ({ onSubmit }: RegisterUser) => {
  const [isSignup, setIsSignup] = useState(true);
  const schema = isSignup ? signupSchema : loginSchema;
  const {handleSubmit, register, reset, formState: { errors }} = useForm<FormValues>({ resolver: yupResolver(schema) });
  const onSubmitData = (data: FormValues) => {
    onSubmit(data, isSignup);
    reset();
  };

  return (
    <div className="login-container">
      <div className="card">
        <h2>{isSignup ? "Create Account" : "Login"}</h2>
        <p className="signin">
          {isSignup ? (
            <span>
              Already have an account? <a href="#" onClick={() => setIsSignup(false)}>Sign In</a>
            </span>
          ) : (
            <span>
              Don't have an account? <a href="#" onClick={() => setIsSignup(true)}>Sign Up</a>
            </span>
          )}
        </p>
  
        <form onSubmit={handleSubmit(onSubmitData)}>
          {isSignup && (
            <>
              <input type="text" placeholder="Full Name" {...register("fullName")} />
              {errors.fullName && <p className="error-msg">{errors.fullName.message}</p>}
            </>
          )}
  
          <input type="text" placeholder="Email" {...register("email")} />
          {errors.email && <p className="error-msg">{errors.email.message}</p>}
  
          {isSignup && (
            <>
              <input type="text" placeholder="Phone" {...register("phone")} />
              {errors.phone && <p className="error-msg">{errors.phone.message}</p>}
            </>
          )}
  
          <input type="password" placeholder="Password" {...register("password")} />
          {errors.password && <p className="error-msg">{errors.password.message}</p>}
  
          {isSignup && (
            <>
              <select {...register("role")}>
                <option value="">Role</option>
                <option value={UserRole.DOCTOR}>Doctor</option>
                <option value={UserRole.PATIENT}>Patient</option>
              </select>
              {errors.role && <p className="error-msg">{errors.role.message}</p>}
            </>
          )}
  
          <p className="privacy">
            By creating an account, I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
          </p>
  
          <button type="submit" className="submit-btn">
            {isSignup ? "Create CareNest Account" : "Login"}
          </button>
        </form>
      </div>
  
      <div className="card card2">
        {isSignup ? (
          <>
            <h2 className="card-title">CareNest</h2>
            <p className="card-qu">Why sign up?</p>
            <ul className="card-list">
              <li className="card-note">Organize urgent doctor's appointments</li>
              <li className="card-note">Quickly contact an available doctor for emergencies</li>
              <li className="card-note">Experience healthcare quickly and securely</li>
              <li className="card-note">Offered to everyone, regardless of location</li>
            </ul>
          </>
        ) : null}
        <img
          className="card-image"
          src="https://nediagnosticscans.co.za/wp-content/uploads/2022/07/undraw_doctor_kw5l.png"
          alt="Doctor illustration"
        />
      </div>
    </div>
  );
  
};

export default Register;
