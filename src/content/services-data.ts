import type { LucideIcon } from "lucide-react";
import { Warehouse, Truck, Workflow, HardHat } from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  href: string;
  detailIntro?: string;
  features?: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "warehousing",
    name: "Warehousing",
    tagline: "Efficient storage solutions",
    description:
      "State-of-the-art warehousing with inventory management and distribution operations built in.",
    icon: Warehouse,
    href: "/services/warehousing",
    detailIntro:
      "State-of-the-art warehouses equipped to handle your storage needs with precision and care, encompassing inventory management and distribution operations.",
    features: [
      "Inventory management",
      "Secure, monitored storage",
      "Pick, pack & distribution",
      "Flexible short- and long-term space",
    ],
  },
  {
    slug: "transportation",
    name: "Transportation",
    tagline: "Reliable delivery services",
    description:
      "A fleet of modern vehicles and trusted partners covering local and long-distance shipping.",
    icon: Truck,
    href: "/services/transportation",
    detailIntro:
      "A fleet of modern vehicles and a network of trusted partners support delivery operations spanning local and long-distance shipping to ensure timely arrival.",
    features: [
      "Local & long-distance shipping",
      "Modern, maintained fleet",
      "Trusted partner network",
      "Real-time delivery coordination",
    ],
  },
  {
    slug: "supply-chain-optimization",
    name: "Supply Chain Optimization",
    tagline: "Streamlined logistics",
    description:
      "End-to-end coordination from sourcing through final distribution, tuned for efficiency.",
    icon: Workflow,
    href: "/services/supply-chain-optimization",
    detailIntro:
      "Expertise in logistics management designed to streamline operational efficiency, coordinating the entire process from sourcing through final distribution.",
    features: [
      "Sourcing-to-delivery coordination",
      "Process & route optimization",
      "Technology-driven visibility",
      "Custom logistics solutions",
    ],
  },
  {
    slug: "heavy-equipment-hire",
    name: "Heavy Equipment Hire",
    tagline: "Forklift, crane, HIAB & machinery haulage",
    description:
      "Forklift hire, crane hire, HIAB self-loading crane trucks, and heavy machinery haulage — one call handles the lift and the move.",
    icon: HardHat,
    href: "/services/heavy-equipment-hire",
  },
];

export type EquipmentItem = {
  slug: string;
  name: string;
  description: string;
  image?: string;
};

export const HEAVY_EQUIPMENT_ITEMS: EquipmentItem[] = [
  {
    slug: "forklift-hire",
    name: "Forklift Hire",
    description:
      "Warehouse and yard forklifts for loading, unloading, and pallet handling, with or without an operator.",
    image: "/forklift.jpg",
  },
  {
    slug: "crane-hire",
    name: "Crane Hire",
    description:
      "Mobile cranes for heavy lifts on construction and industrial sites — precise positioning, rated capacity you can plan around.",
    image: "/crane-hire.jpeg",
  },
  {
    slug: "hiab-hire",
    name: "HIAB / Lorry-Mounted Crane Hire",
    description:
      "Self-loading crane trucks that lift and haul in one vehicle — ideal where a separate crane and flatbed aren't practical.",
    image: "/hiab-crane-boom.jpg",
  },
  {
    slug: "machinery-truck-hire",
    name: "Heavy Machinery Truck Hire",
    description:
      "Flatbed and low-loader trucks for transformers, generators, and industrial plant that need specialist haulage.",
    image: "/heavy-machinery-truck.jpg",
  },
];

export const USE_CASES = [
  {
    title: "Construction sites",
    description: "Material lifting, positioning, and site logistics for active builds.",
  },
  {
    title: "Transformer & generator relocation",
    description: "Specialist haulage and lifting for heavy electrical and power equipment.",
  },
  {
    title: "Container repositioning",
    description: "Moving and stacking shipping containers within depots, ports, and yards.",
  },
  {
    title: "Industrial haulage",
    description: "Moving oversized or overweight plant and machinery between facilities.",
  },
];
