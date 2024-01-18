
// import { ThemeProvider } from "next-themes";
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { ethers, providers } from 'ethers';

// interface Web3State {
//   provider: providers.Web3Provider | null;
//   signer: providers.JsonRpcSigner | null;
//   loaded: boolean;
// }

// const Web3Context = createContext<Web3State>({
//   provider: null,
//   signer: null,
//   loaded: false,
// });

// export const useWeb3 = () => useContext(Web3Context);

// export function Providers({ children }: { children: React.ReactNode })  {
//   const [web3State, setWeb3State] = useState<Web3State>({
//     provider: null,
//     signer: null,
//     loaded: false,
//   });

//   useEffect(() => {
//     if (typeof window !== 'undefined' && window.ethereum) {
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       setWeb3State({ provider, signer, loaded: true });
//     }
//   }, []);

//   return (
//     <Web3Context.Provider value={web3State}>
//       <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
//         {children}
//       </ThemeProvider>
//     </Web3Context.Provider>
//   );
// };

// "use client";

import { ThemeProvider } from "next-themes";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import { ethers } from "ethers";

let provider;
let signer;

if (typeof window !== "undefined" && window.ethereum) {
  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();
} else {
  provider = new ethers.providers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_RPC_URL}`);
  signer = null; 
}
export { provider, signer };

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider activeChain={Sepolia} clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENTID} >
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
        {children}
      </ThemeProvider>
    </ThirdwebProvider>
  );
}

