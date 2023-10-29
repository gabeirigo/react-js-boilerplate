import { Card } from "antd";
import React from "react";
import "./styles.scss";

const Inicio: React.FC = () => {
  return (
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
};

export default Inicio;
