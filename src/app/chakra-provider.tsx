"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProps } from "next/app";
import theme from "@/utils/theme";
import LoadingIcon from "@/components/loading";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [queryClient] = useState(new QueryClient());

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(delay);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <AnimatePresence>
            {loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <LoadingIcon />
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
          <Toaster
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
          />
        </ChakraProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
};

export default Provider;
