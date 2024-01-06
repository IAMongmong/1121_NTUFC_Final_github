import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: "FortuneBricker",
  description: "This is Home for FortuneBricker",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Pricing />
      <Features />
    </>
  );
}
