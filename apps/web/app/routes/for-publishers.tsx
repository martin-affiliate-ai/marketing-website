import { HeroSection1 } from "~/components/common/hero-section-1";
import { HeroSection2 } from "~/components/common/hero-section-2";
import { useFeatureFlagEnabled } from "posthog-js/react";
import { Navigate } from "react-router";
import type { Route } from "./+types/for-publishers";

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

export default function ForPublishers() {
  const flagEnabled = useFeatureFlagEnabled("publicBetaAnnoucement");

  // Redirect if flag is explicitly false or still undefined (not enabled)
  if (!flagEnabled) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="container-padding-x container mx-auto">
      <HeroSection1
        heading="Reinventing affiliate marketing for Publishers"
        description="Access intelligent affiliate campaigns with our cutting-edge platform that automates discovery, management, and performance tracking."
      />
      <HeroSection2
        tagline="Precision"
        heading="The most flexible tracking in affiliate marketing"
        description="Our advanced tracking technology ensures you never miss a commission. We capture every single conversion with unprecedented accuracy and felxibility."
        listItems={[
          "Real-time performance insights",
          "Comprehensive conversion tracking",
          "Multi-platform attribution",
        ]}
        primaryButtonText="Explore tracking"
        secondaryButtonText="Contact Us"
        imageSrc="https://ui.shadcn.com/placeholder.svg"
        imageAlt="Description of your image"
        layout="image-left"
      />
      <HeroSection2
        tagline="Simple"
        heading="Seamless advertiser integrations"
        description="We eliminate tracking gaps and ensure you receive every single commission you've earned. Our robust infrastructure connects you directly with top brands."
        listItems={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        ]}
        primaryButtonText="See Pricing"
        secondaryButtonText="Contact Us"
        imageSrc="https://ui.shadcn.com/placeholder.svg"
        imageAlt="Description of your image"
      />
      <HeroSection2
        tagline="Efficiency"
        heading="Automated optimisation for maximum earnings"
        description="Focus on creating content while our intelligent system handles routine optimisation, campaign management, and performance tracking."
        listItems={[
          "Smart campaign matching",
          "Automated reporting",
          "Performance recommendations",
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
