import { HeroSection1 } from "~/components/page/home/hero-section-1";
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
  return (
    <div className="container-padding-x container mx-auto">
      <HeroSection1 />
    </div>
  );
}
