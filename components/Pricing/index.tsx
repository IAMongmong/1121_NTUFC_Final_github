"use client";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import { provider, signer } from "@/app/providers";
import { useWeb3 } from '@/app/providers';
import { SetupFlashloan_Address, TOKENA_ADDRESS } from "@/db/address";
import { SetupABI, NTUFCAABI } from "@/db/abi";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [bought, setBought] = useState(false);
  // const { provider, signer, loaded } = useWeb3();
  const SetupFlashloan = new ethers.Contract(SetupFlashloan_Address, SetupABI, provider);
  const TokenA = new ethers.Contract(TOKENA_ADDRESS, NTUFCAABI, provider);
  const address = signer.getAddress();
  const handleBuy = async (plan) => {
    let fee = 0;
    switch (plan) {
      case 1:
        fee = isMonthly ? 40 : 400;
        break;
      case 2:
        fee = isMonthly ? 100 : 800;
        break;
      case 3:
        fee = isMonthly ? 300 : 2000;
        break;
    }
    if (address) {
      await TokenA.connect(signer).approve(SetupFlashloan_Address, fee);
      const tx = await SetupFlashloan.connect(signer).subscribe(address);
      await tx.wait();
      setBought(true);
    }
  }

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="Basic rewards = (rewards from a token pair) / (# of people listening on this token pair)"
          center
          width="1280px"
        />

        <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${isMonthly
                ? "pointer-events-none text-primary"
                : "text-dark dark:text-white"
                } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${isMonthly ? "" : "translate-x-full"
                    } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${isMonthly
                ? "text-dark dark:text-white"
                : "pointer-events-none text-primary"
                } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "40 wei" : "400 wei"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="選這個就對了!"
            handleBuy={()=>handleBuy(1)}
          >
            <OfferList text="Basic rewards" status="active" />
            <OfferList text="Listening on 3 token pairs" status="active" />
            <OfferList text="Select token pairs by yourself" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Silver"
            price={isMonthly ? "100 wei" : "800 wei"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="這個也不錯，有眼光"
            handleBuy={()=>handleBuy(2)}
            >
            <OfferList text="Basic reward" status="active" />
            <OfferList text="Listening on 5 token pairs" status="active" />
            <OfferList text="Select token pairs by yourself" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Premium"
            price={isMonthly ? "300 wei" : "2000 wei"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="就怕你買不起"
            handleBuy={()=>handleBuy(3)}
          >
            <OfferList text="Basic rewards" status="active" />
            <OfferList text="Listening on 9 token pairs" status="active" />
            <OfferList text="Select token pairs by yourself" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
