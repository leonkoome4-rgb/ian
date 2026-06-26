import type { LucideIcon } from "lucide-react";
import { CalendarClock, LineChart, Megaphone, Target } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Target,
    title: "Brand Strategy & Custodianship",
    description:
      "Driving brand consistency across corporate and digital touchpoints, translating complex products into relatable, consumer-centric campaigns.",
  },
  {
    icon: Megaphone,
    title: "Digital Growth & Social Media",
    description:
      "End-to-end social strategy and content that humanizes brands, driving traffic and improving conversion across organic and paid channels.",
  },
  {
    icon: LineChart,
    title: "Media Planning & Performance",
    description:
      "Data-driven media plans and budget allocation across digital and traditional channels, with continuous analytics-led optimization.",
  },
  {
    icon: CalendarClock,
    title: "Event & Stakeholder Management",
    description:
      "Coordinating brand activations and corporate events end-to-end, aligning marketing initiatives with sales and growth targets.",
  },
];
