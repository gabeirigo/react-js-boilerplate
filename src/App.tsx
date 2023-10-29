import { AuthProvider } from "@contexts/AuthContext";
import { LayoutProvider } from "@contexts/LayoutContext";
import { Amplify } from "aws-amplify";
import * as React from "react";
import awsConfigs from "./aws-exports";
import Routing from "./routes/Routing";

Amplify.configure(awsConfigs);

export default function App() {
  return (
    <LayoutProvider>
      <AuthProvider>
        <Routing />
      </AuthProvider>
    </LayoutProvider>
  );
}
