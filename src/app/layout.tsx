import type { Metadata } from "next";
import { Montserrat as NextMontserrat } from "next/font/google";
import "./globals.css";
import { NextFont } from "next/dist/compiled/@next/font";
import Providers from "@/lib/Providers";

const Montserrat: NextFont = NextMontserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ZARaN IT",
  description:
    "ZARaN IT provides software development, web development, content researching for youtube, SEO (Search Engine Optimization) and digital marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={Montserrat.className}>
          <main>{children}</main>
        </body>
      </html>
    </Providers>
  );
}
