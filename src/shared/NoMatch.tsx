import React from "react";
import { Link } from "react-router-dom";

const NoMatch: React.FC = () => {
  return (
    <div>
      <h2>404 - Nada aqui</h2>
      <p>
        <Link to="/">Voltar para home</Link>
      </p>
    </div>
  );
};

export default NoMatch;
