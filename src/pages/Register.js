import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Layout } from "../components/layout/Layout.js";
import { CustomInput } from "../components/custom-input/CustomInput";
import React, { useState } from "react";
import { postUser } from "../utils/axiosHelper";
import { Alert } from "react-bootstrap";

export const Register = () => {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({}); // uisng useState Hook

  const handleonChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { data } = await postUser(form);
    setResponse(data);
    console.log(data);
  };

  const inputFields = [
    {
      label: "Name",
      placeholder: "Same Smith",
      required: true,
      name: "name",
      type: "text",
    },
    {
      label: "Email",
      placeholder: "your@gmail.com",
      required: true,
      name: "email",
      type: "email",
    },
    {
      label: "pin",
      placeholder: "1234",
      required: true,
      name: "pin",
      type: "number",
      min: 1000,
      max: 9999,
    },
  ];

  return (
    <Layout>
      <Form className="login-page">
        <h2>Register</h2>
        <hr />
        {response.message && (
          <Alert varient={response.status === "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
        )}

        {inputFields.map((item) => (
          <CustomInput {...item} onChange={handleonChange} /> // giving handleChange on form input
        ))}

        <Button variant="success" type="submit" onClick={handleOnSubmit}>
          Submit
        </Button>
        <div className="text-end">
          Already have account? <a href="/"> Login </a>
        </div>
      </Form>
    </Layout>
  );
};

export default Register;
