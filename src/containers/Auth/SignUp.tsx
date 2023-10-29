import { User } from "@shared/models/User";
import { Button, Card, Checkbox, Form, Input } from "antd";
import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthCoverCard from "./AuthCoverCard";
import AuthService from "./services/AuthService";
import "./styles.scss";

const SignUp: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  async function signUp(values: {
    nickname: string;
    password: string;
    email: string;
  }) {
    try {
      setLoading(true);

      const response: AxiosResponse<User> = await AuthService.signUp(values);
      if (response.data.email) {
        navigate("/confirmation", { state: { email: response.data.email } });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error signing up:", error);
    }
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
          label="Nome de usuário"
          name="nickname"
          rules={[
            {
              required: true,
              message: "Por favor, insira um nome de usuário!",
            },
          ]}
        >
          <Input />
        </Form.Item>

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

        <Form.Item
          label="Confirmar Senha"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Por favor, confirme sua senha!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("As senhas não coincidem!"));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <div className="auth-page__controls">
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Lembrar de mim</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" loading={loading} htmlType="submit">
              Finalizar cadastro
            </Button>
          </Form.Item>

          <Form.Item>
            Já tem uma conta? <a href="/">Faça login</a>
          </Form.Item>
        </div>
      </Card>
    </Form>
  );
};

export default SignUp;
