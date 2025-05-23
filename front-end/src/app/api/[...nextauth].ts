import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { supabase } from "@/lib/supabaseClient";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Wallet Login",
      credentials: {
        wallet_address: { label: "Wallet", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const { wallet_address, password } = credentials;

        const { data: user, error } = await supabase
          .from("users")
          .select("*")
          .eq("wallet_address", wallet_address)
          .single();

        if (error || !user) return null;

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return null;

        return {
          id: user.id,
          wallet_address: user.wallet_address,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.id = user.id;
        token.wallet_address = user.wallet_address;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user.id = token.id;
      session.user.wallet_address = token.wallet_address;
      return session;
    },
  }
});

export { handler as GET, handler as POST };
