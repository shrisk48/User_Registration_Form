import React, { useState } from "react";
import axios from "axios";

const LoginForm = ({ handleChangeView }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData);
      alert(response.data.message);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit" className="action-btn">Login</button>
      </form>

      <div className="button-container">
        <button onClick={() => handleChangeView("forgot")} className="action-btn forgot-btn">
          Forgot Password?
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
