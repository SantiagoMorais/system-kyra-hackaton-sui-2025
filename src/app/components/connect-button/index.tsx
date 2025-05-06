import { Info } from "lucide-react";
import Link from "next/link";

export const ConnectButton = () => (
  <Link
    href={"/login"}
    className="text-secondary fixed top-5 right-5 flex cursor-pointer items-center gap-2.5 bg-orange-600 px-4 py-3 uppercase duration-300 hover:opacity-70"
  >
    <Info />
    Connect
  </Link>
);
