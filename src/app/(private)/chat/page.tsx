import { redirect } from "next/navigation";

import { ComponentsContainer } from "@/components/components-container";
import { createClient } from "@/lib/supabase/server";

import { KyraHome } from "./components/kyra-home";
import { KyraNavbar } from "./components/kyra-navbar";

const Kyra = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/sign-in");
  }

  return (
    <ComponentsContainer className="relative w-full flex-col overflow-hidden">
      <KyraNavbar />
      <KyraHome />
    </ComponentsContainer>
  );
};

export default Kyra;
