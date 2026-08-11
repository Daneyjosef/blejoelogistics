import { ServiceDetailTemplate } from "@/components/sections/ServiceDetailTemplate";
import { SERVICES } from "@/content/services-data";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Supply Chain Optimization | Blejoe Logistics" };

export default function SupplyChainOptimizationPage() {
  const service = SERVICES.find((s) => s.slug === "supply-chain-optimization")!;
  return <ServiceDetailTemplate service={service} />;
}
