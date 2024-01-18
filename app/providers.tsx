"use client";

import { ThemeProvider } from "next-themes";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import { ethers } from "ethers";

export const provider = new ethers.providers.Web3Provider(window.ethereum)
export const signer = provider.getSigner()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider activeChain={Sepolia} clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENTID} >
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
        {children}
      </ThemeProvider>
    </ThirdwebProvider>
  );
}

