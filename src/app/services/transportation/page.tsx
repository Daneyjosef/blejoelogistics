import { ServiceDetailTemplate } from "@/components/sections/ServiceDetailTemplate";
import { SERVICES } from "@/content/services-data";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Transportation | Blejoe Logistics" };

export default function TransportationPage() {
  const service = SERVICES.find((s) => s.slug === "transportation")!;
  return <ServiceDetailTemplate service={service} />;
}
