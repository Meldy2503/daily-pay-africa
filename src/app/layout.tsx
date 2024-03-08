import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./provider";


export const metadata: Metadata = {
  title: "Daily Pay Africa",
  description: "Africa's Leading Digitized Thrift Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Providers>{children}</Providers>
        </body>
    </html>
  );
}
