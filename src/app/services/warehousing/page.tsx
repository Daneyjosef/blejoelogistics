import { ServiceDetailTemplate } from "@/components/sections/ServiceDetailTemplate";
import { SERVICES } from "@/content/services-data";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Warehousing | Blejoe Logistics" };

export default function WarehousingPage() {
  const service = SERVICES.find((s) => s.slug === "warehousing")!;
  return <ServiceDetailTemplate service={service} />;
}
