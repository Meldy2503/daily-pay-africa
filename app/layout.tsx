import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AppProps } from "next/app";
import ProtectedLayout from "./components/layouts/protected-layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Providers } from "./chakra-provider";
import { Children, NextPageWithLayout } from "./types";

type Props = {
  Component: NextPageWithLayout;
  pageProps: any;
} & AppProps;

export const metadata: Metadata = {
  title: "Daily Pay Africa",
  description: "Africa's Leading Digitized Thrift Platform",
};

export default function RootLayout({
  Component,
  pageProps,
  children,
}: Props &
  Readonly<{
    children: React.ReactNode;
  }>) {
  const getLayout = Component?.getLayout || ((page: React.ReactNode) => page);

  return (
    <html lang="en">
      <body>
        {/* {Component?.requireAuth ? (
          <ProtectedLayout>
            {getLayout(<Component {...pageProps} />)}
          </ProtectedLayout>
        ) : (
          getLayout(<Component {...pageProps} />)
        )} */}
        {/* <Toaster
          position="top-right"
          toastOptions={{
            success: {
              style: {
                background: "green",
                color: "white",
              },
            },
            error: {
              style: {
                background: "#ab0000",
                color: "white",
              },
            },
          }}
        /> */}
        <Providers>{children}</Providers>
        {/* </QueryClientProvider> */}
      </body>
    </html>
  );
}
