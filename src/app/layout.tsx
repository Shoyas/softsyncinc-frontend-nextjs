import type { Metadata } from "next";

import '../app.scss';
import "./globals.css";
import Providers from "@/lib/Providers";

// const Montserrat: NextFont = NextMontserrat({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
// });
// const Roboto: NextFont = NextRoboto({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
// });

export const metadata: Metadata = {
  title: "SoftSync INC",
  description:
    "SoftSync INC provides software development, web development, content researching for youtube, SEO (Search Engine Optimization) and digital marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <main>{children}</main>
        </body>
      </html>
    </Providers>
  );
}
