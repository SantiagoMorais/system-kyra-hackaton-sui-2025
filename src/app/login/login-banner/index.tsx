import Image from "next/image";

import loginImage from "@/assets/imgs/login-image.webp";

export const LoginBanner = () => (
  <section className="fixed top-0 -z-10 h-dvh w-full md:static md:max-h-[1080px] md:flex-1 md:overflow-hidden md:p-10">
    <div className="relative h-dvh w-full md:h-full">
      <Image src={loginImage} alt="Login image" className="object-cover" fill />
    </div>
  </section>
);
