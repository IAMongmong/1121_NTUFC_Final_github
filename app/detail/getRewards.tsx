// getData.tsx
import { ethers } from "ethers";
import { provider, signer } from "@/app/providers";
import { SetupFlashloan_Address } from "@/db/address";
import { SetupABI } from "@/db/abi";

export async function getServerSideProps() {
    const SetupFlashloan = new ethers.Contract(SetupFlashloan_Address, SetupABI, provider);
    const rewards = await SetupFlashloan.rewards(provider.getSigner().getAddress());
    const claim = async () => {
        const tx = await SetupFlashloan.connect(provider.getSigner()).claim(provider.getSigner().getAddress());
        await tx.wait();
    }

    return {
        props: {
            rewards,
            claim
        },
    };
}
