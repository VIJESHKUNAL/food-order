import React from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" required />
          </div>
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
          <Link to="/" className="nav-button">
            Go to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
