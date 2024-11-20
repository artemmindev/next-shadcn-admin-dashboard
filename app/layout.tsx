import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/components/layout/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Admin Dashboard",
  description: "Generated by create next app",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={"overflow-hidden"}>
        <NuqsAdapter>
          <Providers session={null}>
            <NextTopLoader showSpinner={false} />
            <Toaster />
            {children}
          </Providers>
        </NuqsAdapter>
      </body>
    </html>
  );
};

export default RootLayout;
