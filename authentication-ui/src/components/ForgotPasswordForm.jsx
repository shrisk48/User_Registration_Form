import React, { useState } from "react";
import axios from "axios";

const ForgotPasswordForm = ({ handleChangeView }) => {
  const [email, setEmail] = useState("");
  const [newpassword, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newpassword.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/forgot-password", {
        email,
        newPassword: newpassword, // Correct field name
      });
      alert(response.data.message);
      handleChangeView("login");
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="form-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          name="newPassword" // Updated to match the backend
          value={newpassword}
          placeholder="Enter your new password"
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      <button onClick={() => handleChangeView("login")} className="login-btn">
        Back to Login
      </button>
    </div>
  );
};

export default ForgotPasswordForm;
