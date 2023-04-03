import React from "react";
import { useState } from "react";
import Form from "../../components/form/Form";

function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      label: "Name",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be at least 7 characters and include at least 1 capital letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      {inputs.map((input) => (
        <Form
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />
      ))}
      <button>Submit</button>
    </form>
  );
}

export default Register;
