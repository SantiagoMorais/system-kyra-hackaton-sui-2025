import Image from "next/image";

import loginImage from "@/assets/imgs/login-image.webp";

export const LoginBanner = () => (
  <section className="fixed top-0 -z-10 min-h-screen w-full px-2 py-10">
    <Image
      src={loginImage}
      alt="Login image"
      fill
      className="object-cover object-center"
    />
  </section>
);
