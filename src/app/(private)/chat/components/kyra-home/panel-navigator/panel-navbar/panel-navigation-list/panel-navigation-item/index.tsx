import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { usePanelNavigator } from "@/contexts/panel-navigator-context/hooks";
import { IPanelItemProps } from "@/core/interfaces/panel-item-props";

export const PanelNavigationItem = ({ text, setPosition }: IPanelItemProps) => {
  const { handlePanel, panel } = usePanelNavigator();
  const ref = useRef<HTMLLIElement | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

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

  const handleClick = () => {
    setHasInteracted(true);
    handlePanel(text);
  };

  const bgClass =
    !hasInteracted && panel === "wallet" && text === "wallet"
      ? "bg-orange-600"
      : "bg-dark-grey";

  return (
    <li
      ref={ref}
      onClick={handleOnMouseEnter}
      key={text}
      className="relative flex-1"
    >
      <div
        className={twMerge("bg-dark-grey absolute z-10 size-full", bgClass)}
      />
      <button
        onClick={() => handleClick()}
        className={`text-secondary relative z-30 flex w-full justify-center p-3 px-2 text-xs uppercase hover:opacity-70`}
      >
        {text}
      </button>
    </li>
  );
};
