import { Form } from "antd";
import React from "react";
import { Link } from "react-router-dom";


function Register() {
  const onFinish = (values)=>{
    console.log(values);
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="card w-400">
        <div className="flex flex-col">
          <h1 className="text-2xl">Register</h1>
          <div className="divider"></div>
          <Form layout="vertical" className="mt-2" onFinish={onFinish}>
            <Form.Item name="name" label="Name">
              <input type="text"></input>
            </Form.Item>

            <Form.Item name="password" label="Password">
              <input type="password"></input>
            </Form.Item>

            <Form.Item name="email" label="Email">
              <input type="text"></input>
            </Form.Item>

            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="primary-contained-btn mt-2 w-100"
              >
                Register
              </button>
              <Link to="/login">
                Already a member? Login
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
