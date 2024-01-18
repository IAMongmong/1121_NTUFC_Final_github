"use client";
import Image from "next/image";
import { ethers } from "ethers";
import { provider, signer } from "@/app/providers";
import nice_meme from "./nice_meme.jpg";
import waiting from "./waiting.png";
import { SetupFlashloan_Address } from "@/db/address";
import { SetupABI } from "@/db/abi";
import { useState, useEffect } from "react";
const DetailPage = () => {
    const [rewards, setRewards] = useState("0");
    const claim = async () => {
        const SetupFlashloan = new ethers.Contract(SetupFlashloan_Address, SetupABI, provider);
        const tx = await SetupFlashloan.connect(signer).claim(signer.getAddress());
        await tx.wait();
        setRewards("0");
    }
    useEffect(() => {
        const getRewards = async () => {
            const SetupFlashloan = new ethers.Contract(SetupFlashloan_Address, SetupABI, provider);
            const rewards = await SetupFlashloan.rewards(signer.getAddress());
            const wholeReward = ethers.utils.formatEther(rewards);
            // only sho rewards 5 decimal places
            const decimal = wholeReward.indexOf(".");
            const decimal5 = decimal + 5;
            const simplifyRewards = wholeReward.slice(0, decimal5);
            setRewards(simplifyRewards);
        }
        getRewards();
    }, [])
    return (
        <>
            <section className="pb-[120px] pt-[150px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4 lg:w-8/12">
                            <div>
                                {Number(rewards) > 0 ?
                                    <>
                                        <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                                            You have earned ${rewards} ether!
                                        </h2>
                                        <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                                            <button onClick={claim} className="mb-5 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                                                Claim
                                            </button>
                                        </div>
                                        <div>
                                            <div className="mb-10 w-full overflow-hidden rounded">
                                                <div className="relative aspect-[87/70] w-full sm:aspect-[40/34]">
                                                    <Image
                                                        src={nice_meme}
                                                        alt="image"
                                                        fill
                                                        className="object-center"
                                                    />
                                                </div>
                                            </div>
                                            <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                                                Congradulations! Keep following us~
                                            </h3>
                                        </div>
                                    </>
                                    :
                                    <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight h-full">
                                        Waiting for our smart bot...
                                        <div className="relative aspect-[40/20] w-full sm:aspect-[40/30]">
                                            <Image
                                                src={waiting}
                                                alt="waiting"
                                                fill
                                                className="my-3 object-center"
                                            />
                                        </div>
                                    </h2>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DetailPage;