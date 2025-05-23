import { createClient } from "@/lib/supabase/client";

export async function GET(
  req: Request,
  context: { params: Promise<{ wallet_address: string }> }
): Promise<Response> {
  try {
    const supabase = createClient();

    const { wallet_address } = (await context.params);

    console.log("Fetching user by wallet address:", wallet_address);

    const { data, error } = await supabase.from("users").select("wallet_address").eq("wallet_address", wallet_address).maybeSingle();

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    if (!data) {
      return new Response(JSON.stringify({ error: `User: ${wallet_address} not found` }), { status: 404 });
    }

    return new Response(JSON.stringify({ sucess: 'ok' }), { status: 200 });
  } catch (e) {
    console.error("Error fetching user by wallet address:", e);
    return new Response(
      JSON.stringify({ error: "Unexpected error" }),
      { status: 500 }
    );
  }
}