"use client";
import Image from "next/image";
import { ethers } from "ethers";
import { provider } from "@/app/providers";
import nice_meme from "./nice_meme.jpg";
import { SetupFlashloan_Address } from "@/db/address";
import { SetupABI } from "@/db/abi";
const DetailPage = () => {
    const SetupFlashloan = new ethers.Contract(SetupFlashloan_Address, SetupABI, provider);
    const rewards = SetupFlashloan.rewards(provider.getSigner().getAddress());
    return (
        <>
            <section className="pb-[120px] pt-[150px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4 lg:w-8/12">
                            <div>
                                {rewards>0?
                                    <>
                                        <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                                            You have earned ${rewards} ether!
                                        </h2>                                
                                        <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                                            <div className="mb-5">
                                                <a
                                                    href="#0"
                                                    className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                                                >
                                                    Claim
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mb-10 w-full overflow-hidden rounded">
                                                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
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
                                    <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                                        Waiting for our smart bot...
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