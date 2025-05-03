import Image from "next/image";

import hexagonLogo from "@/assets/imgs/hexagon.png";
import { navbarIcons } from "@/utils/navbar-icons";

export const Navbar = () => (
  <header className="h-dvh min-h-dvh">
    <nav className="border-light-grey/50 flex h-full flex-col gap-5 border-r px-5 pt-30">
      <span className="size-13 bg-orange-600" />
      <div className="bg-light-grey relative size-13">
        <Image
          src={hexagonLogo}
          alt="hexagon logo"
          fill
          className="object-cover p-2.5"
        />
      </div>
      <ul className="flex w-full flex-col items-center gap-3.5">
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
