import { Link } from "react-router";
import { Separator } from "~/components/ui/separator";
import { PATHS } from "~/routes/utils/paths";

const MAIN_NAV_LINKS = [
  { href: "#", label: "Home" },
  { href: "#", label: "About" },
  { href: "#", label: "Products" },
  { href: "#", label: "Services" },
  { href: "#", label: "Contact" },
];

const LEGAL_LINKS = [
  { href: PATHS.policies.privacy, label: "Privacy Policy" },
  { href: PATHS.policies.cookies, label: "Cookies Settings" },
];

export function Footer() {
  return (
    <footer
      className="bg-background section-padding-y text-sm"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-12 lg:gap-16">
        {/* Top Section */}
        <div className="flex w-full flex-col items-center gap-12 text-center">
          {/* Logo Section */}
          <Link to="/" aria-label="Go to homepage">
            <img
              src="/logo@2x.png"
              alt="affiliate.ai"
              className="h-8 object-contain"
            />
          </Link>

          {/* Main Navigation */}
          {/*
          <nav
            className="flex flex-col items-center gap-4 md:flex-row md:gap-8"
            aria-label="Footer navigation"
          >
            {MAIN_NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          */}
        </div>

        {/* Section Divider */}
        <Separator role="presentation" />

        {/* Bottom Section */}
        <div className="flex w-full flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between lg:gap-6">
          {/* Copyright Text */}
          <p className="text-muted-foreground text-center lg:text-left">
            <span>Copyright © {new Date().getFullYear()}</span>{" "}
            <Link to="/" className="hover:underline">
              Affiliate Intelligence LTD
            </Link>
            . All rights reserved.
          </p>

          {/* Legal Navigation */}
          <nav
            className="flex flex-col items-center gap-4 md:flex-row md:gap-8"
            aria-label="Legal links"
          >
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
