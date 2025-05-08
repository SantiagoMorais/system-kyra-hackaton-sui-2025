import { useRef } from "react";

import { IPanelNavigations } from "@/contexts/panel-navigator-context/interfaces";
import { ICursorPosition } from "@/core/interfaces/panel-navigator-navbar-props";

interface IPanelItem extends IPanelNavigations {
  setPosition: React.Dispatch<React.SetStateAction<ICursorPosition>>;
}

export const PanelItem = ({ icon: Icon, text, setPosition }: IPanelItem) => {
  const ref = useRef<HTMLLIElement | null>(null);
  const handleOnMouseEnter = () => {
    if (!ref.current) return;

    const { width, height } = ref.current.getBoundingClientRect();

    setPosition({
      width,
      opacity: 1,
      left: ref.current.offsetLeft,
      top: ref.current.offsetTop, // the relative position to the father element
      height,
    });
  };

  return (
    <li
      ref={ref}
      onClick={handleOnMouseEnter}
      key={text}
      className="relative z-10 flex-1"
    >
      <button className="text-secondary relative z-20 flex w-full justify-center p-3 duration-300 hover:opacity-70">
        <Icon />
      </button>
    </li>
  );
};
