export interface INavigationContentProps {
  name: string | undefined;
  setRenderDisconnectCard: React.Dispatch<React.SetStateAction<boolean>>;
  isHomePage?: boolean;
}
