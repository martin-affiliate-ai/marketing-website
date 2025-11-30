import { PostHogFeature } from "@posthog/react";

export function HeroSection1() {
  return (
    <section
      className="min-h-75vh section-padding-y flex items-center justify-center"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-2xl">
        <PostHogFeature flag="show-shopify-message" match={true}>
          <div className="mb-8 sm:flex sm:justify-center text-center">
            <div className="animate-[fadeInUp_0.4s_ease-in-out_0.2s] opacity-0 [animation-fill-mode:forwards] relative rounded-full px-3 py-1 text-sm/5 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 font-mono dark:text-gray-400 dark:ring-white/10 dark:hover:ring-white/20">
              Available exclusively to Shopify Customers
            </div>
          </div>
        </PostHogFeature>
        <div className="text-center">
          <h1 className="animate-[fadeInUp_0.6s_ease-in-out] opacity-0 [animation-fill-mode:forwards]">
            An ai-powered affiliate network built for what comes next{" "}
            <span className="text-pink-500">.</span>
          </h1>
          <p className="animate-[fadeInUp_0.8s_ease-in-out_0.2s] opacity-0 [animation-fill-mode:forwards] mt-8 text-lg text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
            Affiliate networks haven’t changed in 20 years. We rebuilt the
            entire infrastructure from the ground up—automating what others do
            manually, integrating AI at the core, and dramatically lowering
            costs.
          </p>
        </div>
      </div>
    </section>
  );
}
