import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Layout } from "../components/layout/Layout.js";
import { CustomInput } from "../components/custom-input/CustomInput";
import { useState } from "react";
import { loginUser } from "../utils/axiosHelper.js";
import { Alert } from "react-bootstrap";

export const Login = () => {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});

  const handleonChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setForm({
      ...form,
      [name]: value,
    });
  };

  const inputFields = [
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

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { data } = await loginUser(form);

    setResponse(data);
  };

  return (
    <Layout>
      <Form className="login-page" onSubmit={handleOnSubmit}>
        <h2>Welcome Back! Login</h2>
        <hr />
        {response.message && (
          <Alert varient={response.status === "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
        )}

        {inputFields.map((item) => (
          <CustomInput {...item} onChange={handleonChange} />
        ))}

        <Button variant="success" type="submit">
          Login
        </Button>

        <div className="text-end">
          New here? <a href="/register"> register </a>
        </div>
      </Form>
    </Layout>
  );
};

export default Login;
