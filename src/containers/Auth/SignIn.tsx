import { AuthContext } from "@contexts/AuthContext";
import { Button, Card, Checkbox, Form, Input } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthCoverCard from "./AuthCoverCard";
import AuthService from "./services/AuthService";
import "./styles.scss";

const SignIn: React.FC = () => {
  const [form] = Form.useForm();
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (sessionStorage.getItem("@ImobiGS:accessToken")) {
      navigate("/home");
    }
  }, []);

  async function signUp(values: {
    nickname: string;
    password: string;
    email: string;
  }) {
    try {
      setLoading(true);

      const cognitoUser = await AuthService.signIn(values);

      if (cognitoUser.signInUserSession.accessToken) {
        setCognitoUser(cognitoUser);
        navigate("/home");
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error signing in:", error);
    }
  }

  function setCognitoUser(cognitoUser: any) {
    sessionStorage.setItem(
      "@ImobiGS:accessToken",
      cognitoUser.signInUserSession.accessToken.jwtToken
    );
    sessionStorage.setItem(
      "@ImobiGS:refreshToken",
      cognitoUser.signInUserSession.refreshToken.token
    );

    dispatch({ type: "setIsLogged", payload: true });
    dispatch({ type: "setSub", payload: cognitoUser.signInUserSession.sub });
  }

  return (
    <Form
      className="auth-page"
      name="signUp"
      form={form}
      size="large"
      layout="vertical"
      onFinish={signUp}
    >
      <Card bordered={false} className="auth-page__card">
        <AuthCoverCard />
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              type: "email",
              message: "O e-mail não é válido!",
            },
            {
              required: true,
              message: "Por favor, insira seu e-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Senha"
          name="password"
          rules={[
            {
              required: true,
              message: "Por favor, insira sua senha!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <div className="auth-page__controls">
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Lembrar de mim</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Entrar
            </Button>
          </Form.Item>
        </div>
      </Card>
    </Form>
  );
};

export default SignIn;
