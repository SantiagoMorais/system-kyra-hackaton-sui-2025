import "./globals.css";

import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";

import { ThemeTogglerProvider } from "@/contexts/theme-toggler-context/provider";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyra - Hackaton SUI 2025",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.className} antialiased`}>
        <ThemeTogglerProvider>{children}</ThemeTogglerProvider>
      </body>
    </html>
  );
}
