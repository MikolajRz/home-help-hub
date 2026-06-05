export type SEOPage = {
  slug: string;
  title: string;
  description: string;
  steps: string[];
  keywords: string[];
};

export const seoPages: SEOPage[] = [
  {
    slug: "how-to-fix-low-water-pressure",
    title: "How to fix low water pressure",
    description: "Step-by-step guide to increase water pressure in your home",
    keywords: ["water pressure", "low pressure", "plumbing"],
    steps: [
      "Check main water valve",
      "Clean aerators",
      "Inspect pipes for blockages",
    ],
  },
  {
    slug: "how-to-unblock-sink",
    title: "How to unblock a sink fast",
    description: "Simple methods to unblock kitchen sinks",
    keywords: ["sink", "blockage", "drain"],
    steps: [
      "Use plunger",
      "Clean trap under sink",
      "Use baking soda + vinegar",
    ],
  },
];