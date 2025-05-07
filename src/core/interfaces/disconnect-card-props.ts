export interface IDisconnectCardProps {
  setRenderDisconnectCard: React.Dispatch<React.SetStateAction<boolean>>;
  disconnect: () => Promise<void>;
}
