import { X } from "lucide-react";

import { IDisconnectCardProps } from "@/core/interfaces/disconnect-card-props";

export const DisconnectCard = ({
  disconnect,
  setRenderDisconnectCard,
}: IDisconnectCardProps) => (
  <section className="fixed top-0 left-0 z-40 flex min-h-dvh w-full items-center justify-center bg-black/50">
    <aside className="bg-dark-grey z-50 w-10/12 space-y-4 p-4">
      <h2 className="text-secondary font-redonda text-center">
        <button
          className="group float-right border border-transparent p-1 duration-300 hover:border-orange-600"
          onClick={() => setRenderDisconnectCard(false)}
        >
          <X className="text-grey size-5 duration-300 group-hover:text-orange-600" />
        </button>
        Are you sure you want to disconnect?
      </h2>
      <button
        className="text-secondary font-redonda w-full cursor-pointer bg-orange-600 p-3"
        onClick={disconnect}
      >
        Disconnect
      </button>
    </aside>
  </section>
);
