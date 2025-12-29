import type { SanityDocument } from "@sanity/client";
import type { SanityImageSource } from "@sanity/image-url";
import type { PortableTextBlock } from "@portabletext/react";

export interface Post extends SanityDocument {
  _type: "post";
  slug: {
    current: string;
  };
  title: string;
  image?: SanityImageSource;
  body?: PortableTextBlock[];
  publishedAt: string;
}
