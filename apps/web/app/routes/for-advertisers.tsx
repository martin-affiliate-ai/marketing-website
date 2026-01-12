import { HeroSection1 } from "~/components/common/hero-section-1";
import { HeroSection2 } from "~/components/common/hero-section-2";
import { useFeatureFlagEnabled } from "posthog-js/react";
import { Navigate } from "react-router";
import type { Route } from "./+types/for-advertisers";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Reinventing affiliate marketing through intelligent automation | affiliate.ai",
    },
    {
      name: "description",
      content: "Reinventing affiliate marketing through intelligent automation",
    },
  ];
}

export default function ForAdvertisers() {
  const flagEnabled = useFeatureFlagEnabled("publicBetaAnnoucement");

  // Redirect if flag is explicitly false or still undefined (not enabled)
  if (!flagEnabled) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="container-padding-x container mx-auto">
      <HeroSection1
        heading="Reinventing affiliate marketing for Advertisers"
        description="Unlock intelligent affiliate campaigns with our cutting-edge platform that automates discovery, management, and performance tracking."
      />
      <HeroSection2
        tagline="Modern"
        heading="Built for the future of affiliate marketing"
        description="Our advanced technology stack leverages intelligent automation to transform how advertisers connect with publishers. Experience a platform designed for 2026, not stuck in 2006."
        listItems={["Item 1", "Item 2", "Item 3"]}
        primaryButtonText="Explore features"
        secondaryButtonText="Contact Us"
        imageSrc="https://ui.shadcn.com/placeholder.svg"
        imageAlt="Description of your image"
        layout="image-left"
      />
      <HeroSection2
        tagline="Affordable"
        heading="Revolutionising Pricing in Affiliate Marketing"
        description="By engineering our tech stack from the ground up, we leverage AI to handle tasks that were once manual. This innovation enables us to offer significantly lower prices compared to traditional networks."
        listItems={[
          "Competitive pricing without compromising on quality.",
          "Save costs while maximising your marketing impact.",
          "Experience unmatched value in affiliate marketing.",
        ]}
        primaryButtonText="See Pricing"
        secondaryButtonText="Contact Us"
        imageSrc="https://ui.shadcn.com/placeholder.svg"
        imageAlt="Description of your image"
      />
      <HeroSection2
        tagline="Intelligent"
        heading="Outcomes-driven affiliate marketing automation"
        description="We focus on delivering real results, not just features. Our AI-first approach automates complex tasks, giving you more time to grow your business."
        listItems={[
          "Smart publisher matching",
          "Automated performance tracking",
          "Intelligent campaign optimization",
        ]}
        primaryButtonText="Find out more"
        secondaryButtonText="Contact Us"
        imageSrc="https://ui.shadcn.com/placeholder.svg"
        imageAlt="Description of your image"
        layout="image-left"
      />
    </div>
  );
}
