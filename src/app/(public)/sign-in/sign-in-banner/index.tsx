import Image from "next/image";

import signInImage from "@/assets/imgs/sign-in-image.webp";

export const SignInBanner = () => (
  <section className="fixed top-0 z-0 h-dvh w-full md:static md:max-h-[1080px] md:flex-1 md:overflow-hidden md:p-10">
    <div className="relative h-dvh w-full md:h-full">
      <Image
        src={signInImage}
        alt="SignIn image"
        className="object-cover"
        fill
      />
    </div>
  </section>
);
