// Register.tsx
import React, { useState, useCallback, FormEvent } from "react";
import { addToStorage } from "utils/index";
import { useNavigate } from "react-router-dom";
import InputField from "components/inputField/inputField";

const initialValue: TInitialValue = {
  fullName: "",
  email: "",
  password: "",
  confirm: "",
  agree: false,
};

type TInitialValue = {
  fullName: string;
  email: string;
  password: string;
  confirm: string;
  agree: boolean;
};

export default function Register() {
  const [formValues, setFormValues] = useState<TInitialValue>(initialValue);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  // to make sure to render only input field changed
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, type, value, checked } = e.target as HTMLInputElement;
      if (type === "checkbox") {
        setFormValues((prev) => ({ ...prev, [name]: checked }));
      } else {
        setFormValues((prev) => ({ ...prev, [name]: value }));
      }
    },
    []
  );

  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {};

    if (!formValues.fullName) {
      errors.fullName = "Please enter your full name!";
    }

    if (!formValues.email) {
      errors.email = "Please enter your email!";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Please enter a valid email address!";
    }

    if (!formValues.password) {
      errors.password = "Please enter your password!";
    }

    if (!formValues.confirm) {
      errors.confirm = "Please confirm your password!";
    } else if (formValues.confirm !== formValues.password) {
      errors.confirm = "Passwords do not match!";
      errors.password = "Passwords do not match!";
    }

    if (!formValues.agree) {
      errors.agree = "You must agree to the terms and conditions!";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      const { password, confirm, ...userData } = formValues;
      addToStorage(userData, "user");
      navigate("/");
      setFormValues(initialValue);
      setErrors({});
    }
  };

  return (
    <div className="card">
      <h2 style={{ marginBottom: "1em" }}>Register</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          id="fullName"
          name="fullName"
          type="text"
          value={formValues.fullName}
          placeholder="Enter your full name"
          onChange={handleChange}
          error={errors.fullName}
        />
        <InputField
          id="email"
          name="email"
          type="text"
          value={formValues.email}
          placeholder="Enter your email"
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          id="password"
          name="password"
          type="password"
          value={formValues.password}
          placeholder="Enter your password"
          onChange={handleChange}
          error={errors.password}
        />
        <InputField
          id="confirm"
          name="confirm"
          type="password"
          value={formValues.confirm}
          placeholder="Confirm your password"
          onChange={handleChange}
          error={errors.confirm}
        />
        <div className="checkboxWrapper">
          <InputField
            id="agree"
            name="agree"
            type="checkbox"
            checked={formValues.agree}
            onChange={handleChange}
            error={errors.agree}
          />
          <label htmlFor="agree" className="checkboxField">
            Agree to the terms and conditions
          </label>
        </div>

        <button
          type="submit"
          className="button"
          style={{ margin: "1em auto", display: "block" }}
        >
          Register
        </button>
      </form>
    </div>
  );
}
