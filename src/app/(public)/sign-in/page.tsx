import { ComponentsContainer } from "@/components/components-container";

import { SignInBanner } from "./sign-in-banner";
import { SignInContent } from "./sign-in-content";

const SingIn = () => (
  <ComponentsContainer>
    <section className="flex size-full min-h-dvh w-full max-w-(--breakpoint-2xl) items-center justify-center">
      <SignInBanner />
      <hr className="bg-grey/50 hidden min-h-dvh w-px md:block" />
      <SignInContent />
    </section>
  </ComponentsContainer>
);

export default SingIn;
