import { Alert, Button, Card, Form, Input, Result } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthCoverCard from "./AuthCoverCard";
import AuthService from "./services/AuthService";

// import { Container } from './styles';

const Confirmation: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(false);
  const [showConfirmationResult, setShowConfirmationResult] =
    useState<boolean>(false);

  useEffect(() => {
    if (!location?.state?.email) navigate("/");
  }, [location, navigate]);

  async function signUp(values: { code: string }) {
    const { code } = values;

    try {
      setLoading(true);
      const result = await AuthService.confirmSignUp(
        location.state.email,
        code
      );

      if (result === "SUCCESS") setShowConfirmationResult(true);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error signing in:", error);
    }
  }

  function buildValidationResult() {
    return (
      <Result
        status="success"
        title="Conta de usuário validado com sucesso!"
        subTitle={`O usuário ${location.state.email} foi validado com sucesso!`}
        extra={[
          <Button type="primary" key="console" onClick={() => navigate("/")}>
            Ir para o login
          </Button>,
        ]}
      />
    );
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
        {showConfirmationResult ? (
          buildValidationResult()
        ) : (
          <>
            <Alert
              message="Verificação de conta"
              description="Você recebeu por email um código de verificação. Entre na sua caixa de entrada para copiar, e cole no formulário abaixo."
              type="info"
              showIcon
              className="auth-page__confirmation-account-alert"
            />

            <Form.Item
              label="Código"
              name="code"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira seu código!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <div className="auth-page__controls">
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Confirmar cadastro
                </Button>
              </Form.Item>
            </div>
          </>
        )}
      </Card>
    </Form>
  );
};

export default Confirmation;
