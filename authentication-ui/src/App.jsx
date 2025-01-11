import React, { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import ForgotPasswordForm from "./components/ForgotPasswordForm";

const App = () => {
  const [currentView, setCurrentView] = useState("register");

  const handleChangeView = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="app-container">
      {currentView !== "forgot"
        &&
        <h1 className="app-name">User Authentication</h1>
      }
      {
        currentView !== "forgot" &&
        < div className="view-switcher">
          <button
            className={currentView === "register" ? "active" : ""}
            onClick={() => handleChangeView("register")}

          >
            Register
          </button>
          <button
            className={currentView === "login" ? "active" : ""}
            onClick={() => handleChangeView("login")}
          >
            Login
          </button>
        </div>

      }

      <div className="form-container">
        {currentView === "register" && <RegisterForm />}
        {currentView === "login" && <LoginForm handleChangeView={handleChangeView} />}
        {currentView === "forgot" && <ForgotPasswordForm handleChangeView={handleChangeView} />}
      </div>
    </div >
  );
};

export default App;
