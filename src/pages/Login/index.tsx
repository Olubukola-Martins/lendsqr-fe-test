import React, { useMemo, useState } from "react";
import "./Login.scss";
import InputField from "../../components/FormItems/InputField";
import AppButton from "../../components/AppButton";
import loginImage from "../../assets/signIn.png";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formBtnIsDisabled = useMemo(() => {
    const isFormIncomplete = !form.email || !form.password;
    const hasErrors = Object.keys(errors).length > 0;
    return isFormIncomplete || hasErrors;
  }, [form, errors]);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.email) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Logging in with:", form);
    }
  };

  return (
    <div className="login-page">
      <div className="login-page__image-container">
        <img src={loginImage} alt="Login visual" />
      </div>

      <div className="login-page__form">
        <h1>
          Welcome!
        </h1>
        <p>Enter details to login.</p>
        <form onSubmit={handleSubmit}>
          <InputField
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Email"
          />
          <div className="login-page__form--password-input">
            <InputField
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              error={errors.password}
              placeholder="Password"
            />
            <span
              className="show-password"
              onClick={() => setShowPassword((prev) => !prev)}
              style={{ cursor: "pointer" }}>
              {showPassword ? "HIDE" : "SHOW"}
            </span>
          </div>

          <div className="login-page__form--forgot-password">
            FORGOT PASSWORD?
          </div>
          <AppButton
            label="LOG IN"
            type="submit"
            className="login-page__form--login-btn"
            disabled={formBtnIsDisabled}
            onClick={() => navigate("/dashboard")}
          />
        </form>
      </div>

      <img src={logo} alt="Lendsqr Logo" className="login-page__logo" />
    </div>
  );
};

export default Login;
