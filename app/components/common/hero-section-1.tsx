import { Badge } from "~/components/ui/badge";

interface HeroSection1Props {
  badgeText?: string;
  heading?: string;
  description?: string;
}

export function HeroSection1({ badgeText, heading, description }: HeroSection1Props) {
  return (
    <section
      className="min-h-75vh section-padding-y flex items-center justify-center"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-2xl">
        {badgeText && (
          <div className="mb-8 sm:flex sm:justify-center text-center">
            <Badge
              variant="outline"
              className="animate-[fadeInUp_0.4s_ease-in-out_0.2s] opacity-0 [animation-fill-mode:forwards] font-mono"
            >
              {badgeText}
            </Badge>
          </div>
        )}
        <div className="text-center">
          {heading && (
            <h1 className="heading-xl animate-[fadeInUp_0.6s_ease-in-out] opacity-0 [animation-fill-mode:forwards]">
              {heading}
              <span className="text-pink-500">.</span>
            </h1>
          )}
          {description && (
            <p className="animate-[fadeInUp_0.8s_ease-in-out_0.2s] opacity-0 [animation-fill-mode:forwards] mt-8 text-lg text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
