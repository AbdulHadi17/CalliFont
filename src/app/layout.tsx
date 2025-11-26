import type { Metadata } from "next";
import { Outfit, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "@/app/globals.css";
import { AuthProvider } from "@/context/AuthContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const rockybilly = localFont({
  src: "./fonts/Rockybilly.ttf", // or .ttf, .otf - adjust based on your file
  variable: "--font-rockybilly",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CalliFont - Mimic Your Handwriting ",
  description: "AI solution to mimic your handwriting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${roboto.variable} ${rockybilly.variable} antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
