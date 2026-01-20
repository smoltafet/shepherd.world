import { Upload, Languages, Sparkles, Layout, Rocket } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Single Upload",
    date: "Q1 2024",
    content: "Upload once, manage everything from one place. Our platform accepts a single video and handles all the complexity behind the scenes.",
    category: "Core Platform",
    icon: Upload,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Translation Engine",
    date: "Q2 2024",
    content: "Automatic translation that adapts your video for different languages and regions, ensuring your message resonates globally.",
    category: "Localization",
    icon: Languages,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "AI Lip-Sync",
    date: "Q3 2024",
    content: "AI-powered lip-sync technology that makes multilingual videos feel native and natural, maintaining authenticity across languages.",
    category: "AI Technology",
    icon: Sparkles,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 75,
  },
  {
    id: 4,
    title: "Multi-Platform Formatting",
    date: "",
    content: "Automatically adapts videos for different social platforms, regions, and formats.",
    category: "Distribution",
    icon: Layout,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 50,
  },
  {
    id: 5,
    title: "Global Distribution",
    date: "2025",
    content: "Complete infrastructure for multilingual content that's simple, scalable, and native-feeling across all platforms worldwide.",
    category: "Scale",
    icon: Rocket,
    relatedIds: [4],
    status: "pending" as const,
    energy: 25,
  },
];

export const Products = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <RadialOrbitalTimeline timelineData={timelineData} />
    </div>
  );
};
