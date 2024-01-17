
import Image from "next/image";

import { Metadata } from "next";
import DetailData from "@/components/Detail/detaildata";
import MockData from "@/components/Detail/MockData";

export const metadata: Metadata = {
    title: "Details Page | FortuneBricker",
    description: "This is Blog Details Page for FortuneBricker",
    // other metadata
};

const DetailPage = () => {
    return (
        <>
            <section className="pb-[120px] pt-[150px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4 lg:w-8/12">
                            <div>
                                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                                    Look How Much You Earned
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
                                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        <MockData />
                                    </p>
                                    <div className="mb-10 w-full overflow-hidden rounded">
                                        <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                                            <Image
                                                src="nice_meme.jpg"
                                                alt="image"
                                                fill
                                                className="object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                                        It is not bad!
                                    </h3>
                                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Keep it up!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DetailPage;