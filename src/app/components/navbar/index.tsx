import Image from "next/image";

import hexagonLogo from "@/assets/imgs/hexagon.png";
import { navbarIcons } from "@/utils/navbar-icons";

export const Navbar = () => (
  <header className="w-full md:h-dvh md:min-h-dvh md:w-fit">
    <nav className="border-light-grey/50 flex h-full gap-5 border-b p-5 md:flex-col md:border-r md:px-5 md:py-0 md:pt-25">
      <span className="size-13 min-h-13 min-w-13 bg-orange-600" />
      <div className="bg-light-grey relative size-13 min-h-13 min-w-13">
        <Image
          src={hexagonLogo}
          alt="hexagon logo"
          fill
          className="object-cover p-2.5"
        />
      </div>
      <ul className="flex w-full items-center gap-3.5 md:flex-col">
        {navbarIcons.map(({ icon: Icon }, index) => (
          <li key={index}>
            <button className="group cursor-pointer">
              <Icon className="text-light-grey opacity-40 duration-300 group-hover:opacity-100" />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
