import type { Metadata } from "next";
import Provider from "./chakra-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "DailyPayAfrica",
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
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
