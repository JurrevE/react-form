import React from "react";
import "./App.css";

export default function App() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmedPassword: "",
    checkbox: false,
  });
  console.log(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.confirmedPassword) {
      console.log("Successfully signed up");
      if (formData.checkbox) {
        console.log("Thanks for signing up for our newsletter!");
      }
    } else {
      console.log("Passwords do not match!");
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          name="email"
          className="form--input"
          onChange={handleChange}
          value={formData.email}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          className="form--input"
          onChange={handleChange}
          value={formData.password}
        />

        <label htmlFor="confirmedPassword">Confirm password</label>
        <input
          id="confirmedPassword"
          name="confirmedPassword"
          type="password"
          className="form--input"
          onChange={handleChange}
          value={formData.confirmedPassword}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            name="checkbox"
            type="checkbox"
            onChange={handleChange}
            checked={formData.checkbox}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>

        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
