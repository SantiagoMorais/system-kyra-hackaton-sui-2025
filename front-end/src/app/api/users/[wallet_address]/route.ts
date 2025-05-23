import { supabase } from "@/lib/supabaseClient";

export async function GET(
  req: Request,
  context: { params: { wallet_address: string } }
): Promise<Response> {
  try {
    const { wallet_address } = context.params;

    console.log("Fetching user by wallet address:", wallet_address);

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("wallet_address", wallet_address)
      .single();

    if (error || !data) {
      return new Response(
        JSON.stringify({ error: error?.message || "User not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (e) {
    console.error("Error fetching user by wallet address:", e);
    return new Response(
      JSON.stringify({ error: "Unexpected error" }),
      { status: 500 }
    );
  }
}