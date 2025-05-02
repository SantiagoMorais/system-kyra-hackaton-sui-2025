import { ComponentsContainer } from "@/components/components-container";

import { LoginBanner } from "./login-banner";
import { LoginContent } from "./login-content";

const Login = () => (
  <ComponentsContainer>
    <LoginBanner />
    <LoginContent />
  </ComponentsContainer>
);

export default Login;
