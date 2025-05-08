export interface ICursorPosition {
  top: number;
  left: number;
  width: string | number;
  opacity: number;
  height: number;
}

export interface IRouteItemProps {
  route: {
    title: string;
    path: string;
  };
  setPosition: React.Dispatch<React.SetStateAction<ICursorPosition>>;
}
