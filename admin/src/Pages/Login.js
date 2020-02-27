import React, { useState } from "react";
import "antd/dist/antd.css";
import { Card,message, Input, Icon, Button, Spin } from "antd";
import { login } from "../api/";

import "../static/css/Login.css";

export default function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const checkLogin = () => {
  
    if (!userName) {
      message.error("用户名不能为空");
      return false;
    } else if (!password) {
      message.error("密码不能为空");
      return false;
    }
    let dataProps = {
      userName: userName,
      password: password
    };
    setIsLoading(true);
    login(dataProps).then(res => {
      if (res.code == 0) {
        console.log(res);
        setIsLoading(false);
        props.history.push('/index')
        console.log(props)
      } else {

      }
    });
  };
  return (
    <div className="login-div">
      <Spin tip="Loading..." spinning={isLoading}>
        <Card
          title="JSPang Blog  System"
          bordered={true}
          style={{ width: 400 }}
        >
          <Input
            id="userName"
            size="large"
            placeholder="Enter your userName"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            onChange={e => {
              setUserName(e.target.value);
            }}
          />
          <br />
          <br />
          <Input.Password
            id="password"
            size="large"
            placeholder="Enter your password"
            prefix={<Icon type="key" style={{ color: "rgba(0,0,0,.25)" }} />}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <Button type="primary" size="large" block onClick={checkLogin}>
            {" "}
            Login in{" "}
          </Button>
        </Card>
      </Spin>
    </div>
  );
}
