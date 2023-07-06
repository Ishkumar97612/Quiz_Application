import { Form } from "antd";
import React from "react";
import { Link } from "react-router-dom";


function Login() {
  const onFinish = (values)=>{
    console.log(values);
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="card w-400">
        <div className="flex flex-col">
          <h1 className="text-2xl">Login</h1>
          <div className="divider"></div>
          <Form layout="vertical" className="mt-2" onFinish={onFinish}>
            <Form.Item name="email" label="Email">
              <input type="text"></input>
            </Form.Item>

            <Form.Item name="password" label="Password">
              <input type="password"></input>
            </Form.Item>

            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="primary-contained-btn mt-2 w-100"
              >
                Login
              </button>
              <Link to="/register" className="underline">
                Not a member? Register
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
