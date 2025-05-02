import { ForgotPasswordForm } from "./forgot-password-form";

export const ForgotPassword = () => (
  <>
    <h2 className="font-redonda mb-5 text-center text-[40px] leading-13 font-normal text-orange-600">
      Forgot Password
    </h2>
    <p className="text-light-grey/50 mb-5 text-center leading-6">
      Enter your email for the verification proccess, we will send 4 digits code
      to your email.
    </p>
    <ForgotPasswordForm />
  </>
);
