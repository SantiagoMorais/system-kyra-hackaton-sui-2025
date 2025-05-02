import { ComponentsContainer } from "@/components/components-container";

import { LoginBanner } from "./login-banner";
import { LoginContent } from "./login-content";

const Login = () => (
  <ComponentsContainer>
    <section className="flex size-full min-h-screen w-full max-w-(--breakpoint-2xl) items-center justify-center">
      <LoginBanner />
      <hr className="bg-light-grey hidden min-h-screen w-px md:block" />
      <LoginContent />
    </section>
  </ComponentsContainer>
);

export default Login;
