import { X } from "lucide-react";

import { IDisconnectCardProps } from "@/core/interfaces/disconnect-card-props";

export const DisconnectCard = ({
  disconnect,
  setRenderDisconnectCard,
}: IDisconnectCardProps) => (
  <section
    className="fixed top-0 left-0 z-40 flex min-h-dvh w-full items-center justify-center bg-black/50"
    onClick={() => setRenderDisconnectCard(false)}
  >
    <aside className="bg-dark-grey relative z-50 w-10/12 max-w-120 space-y-4 p-12 py-8">
      <button
        className="group absolute top-2 right-2 border border-transparent p-1 duration-300 hover:border-orange-600"
        onClick={() => setRenderDisconnectCard(false)}
      >
        <X className="text-grey size-6 duration-300 group-hover:text-orange-600" />
      </button>
      <h2 className="text-secondary font-redonda text-center text-2xl">
        Are you sure you want to disconnect?
      </h2>
      <button
        className="text-secondary font-redonda w-full cursor-pointer bg-orange-600 p-3 duration-300 hover:bg-orange-500"
        onClick={disconnect}
      >
        Disconnect
      </button>
      <button
        className="text-secondary font-redonda border-grey hover:border-black-grey w-full cursor-pointer border p-3 duration-300"
        onClick={() => setRenderDisconnectCard(false)}
      >
        Cancel
      </button>
    </aside>
  </section>
);
