import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { Circle, ChevronRight } from "lucide-react";

interface HeroSection2Props {
  tagline?: string;
  heading?: string;
  description?: string;
  listItems?: string[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  imageSrc?: string;
  imageAlt?: string;
  layout?: "image-left" | "image-right";
}

const defaultListItems = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
];

export function HeroSection2({
  tagline,
  heading,
  description,
  listItems = defaultListItems,
  primaryButtonText,
  secondaryButtonText,
  imageSrc,
  imageAlt = "Hero image",
  layout = "image-right",
}: HeroSection2Props) {
  const contentSection = (
    <div className="flex w-full flex-col gap-6 md:w-[600px] md:gap-8">
      <div className="flex flex-col gap-5 md:gap-8">
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="flex flex-row items-center">
            <Badge variant="default">{tagline}</Badge>
          </div>
          <div className="flex flex-col gap-5 md:gap-6">
            <h2 className="heading-lg">{heading}</h2>
            <p className="text-xs leading-normal text-foreground md:text-lg">
              {description}
            </p>
          </div>
        </div>
        <ul className="flex flex-col gap-4 py-2">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="flex flex-row items-start gap-4 md:items-center"
            >
              <div className="shrink-0">
                <Circle className="size-4" />
              </div>
              <span className="text-xs leading-normal text-foreground md:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row items-center gap-6">
        <Button variant="secondary">{primaryButtonText}</Button>
        <Button variant="link">
          {secondaryButtonText}
          <ChevronRight />
        </Button>
      </div>
    </div>
  );

  const imageSection = imageSrc ? (
    <div className="relative h-[348px] w-full overflow-hidden rounded-lg md:h-[640px] md:w-[600px]">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="h-full w-full object-cover"
      />
    </div>
  ) : null;

  return (
    <div className="flex flex-col items-center gap-12 bg-background px-5 py-16 md:gap-20 md:px-16 md:py-28">
      <div className="flex w-full max-w-screen-xl flex-col gap-12 md:gap-20">
        <div className="flex flex-col items-start gap-12 md:flex-row md:gap-20">
          {layout === "image-left" ? (
            <>
              {imageSection}
              {contentSection}
            </>
          ) : (
            <>
              {contentSection}
              {imageSection}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
