import { HeroSection1 } from "~/components/common/hero-section-1";
import { HeroSection2 } from "~/components/common/hero-section-2";
import { useFeatureFlagEnabled } from "posthog-js/react";
import type { Route } from "./+types/home";

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

export default function Home() {
  const flagEnabled = useFeatureFlagEnabled("publicBetaAnnoucement");
  return (
    <div className="container-padding-x container mx-auto">
      <HeroSection1
        badgeText="Beta - Available Soon"
        heading="Reinventing affiliate marketing through intelligent automation"
        description="We want to give every brand access to expert-level performance without the overhead of traditional networks"
      />
      {flagEnabled && (
        <>
          <HeroSection2
            tagline="Automation"
            heading="Intelligent marketing made simple"
            description="Our advanced AI technology transforms affiliate marketing by eliminating complex manual processes and delivering data-driven insights."
            listItems={["Item 1", "Item 2", "Item 3"]}
            primaryButtonText="Explore features"
            secondaryButtonText="Learn more"
            imageSrc="https://ui.shadcn.com/placeholder.svg"
            imageAlt="Description of your image"
          />
        </>
      )}
    </div>
  );
}
