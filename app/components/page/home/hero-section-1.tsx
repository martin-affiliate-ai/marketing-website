import { Badge } from "~/components/ui/badge";

export function HeroSection1() {
  return (
    <section
      className="min-h-75vh section-padding-y flex items-center justify-center"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 sm:flex sm:justify-center text-center">
          <Badge
            variant="outline"
            className="animate-[fadeInUp_0.4s_ease-in-out_0.2s] opacity-0 [animation-fill-mode:forwards] font-mono"
          >
            Beta - Available Soon
          </Badge>
        </div>
        <div className="text-center">
          <h1 className="animate-[fadeInUp_0.6s_ease-in-out] opacity-0 [animation-fill-mode:forwards]">
            Reinventing affiliate marketing through intelligent automation{""}
            <span className="text-pink-500">.</span>
          </h1>
          <p className="animate-[fadeInUp_0.8s_ease-in-out_0.2s] opacity-0 [animation-fill-mode:forwards] mt-8 text-lg text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
            We want to give every brand access to expert-level performance
            without the overhead of traditional networks
          </p>
        </div>
      </div>
    </section>
  );
}
